import * as io from 'socket.io-client'
import { ScoreboardUpdate } from '../models/ScoreboardUpdate'
import { LogUpdate } from '../models/LogUpdate'
import { fetchPage } from '../utils/mappers'
import { HLTVConfig } from '../config'


var url = require('url')
var HttpsProxyAgent = require('https-proxy-agent')

var proxy = "http://lum-customer-hl_bfa58f09-zone-csgo_proxy-country-us:ukbbyolfwhwk@zproxy.lum-superproxy.io:22225"
var options = url.parse(proxy)
var agent = new HttpsProxyAgent(options)

export type ConnectToScorebotParams = {
  id: number
  onScoreboardUpdate?: (data: ScoreboardUpdate) => any
  onLogUpdate?: (data: LogUpdate) => any
  onFullLogUpdate?: (data: unknown) => any
  onConnect?: () => any
  onDisconnect?: () => any
}

export const connectToScorebot = (config: HLTVConfig) => async ({
  id,
  onScoreboardUpdate,
  onLogUpdate,
  onFullLogUpdate,
  onConnect,
  onDisconnect
}: ConnectToScorebotParams) => {
  const $ = await fetchPage(`${config.hltvUrl}/matches/${id}/-`, config.loadPage)
  const url = $('#scoreboardElement')
    .attr('data-scorebot-url')
    .split(',')
    .pop()!
  const matchId = $('#scoreboardElement').attr('data-scorebot-id')

  const socket = io.connect(url, { agent: agent})

  const initObject = JSON.stringify({
    token: '',
    listId: matchId
  })

  socket.on('connect', () => {
    if (onConnect) {
      onConnect()
    }

    socket.emit('readyForMatch', initObject)

    socket.on('scoreboard', data => {
      if (onScoreboardUpdate) {
        onScoreboardUpdate(data)
      }
    })

    socket.on('log', data => {
      if (onLogUpdate) {
        onLogUpdate(JSON.parse(data))
      }
    })

    socket.on('fullLog', data => {
      if (onFullLogUpdate) {
        onFullLogUpdate(JSON.parse(data))
      }
    })
  })

  socket.on('reconnect', () => {
    socket.emit('readyForMatch', initObject)
  })

  socket.on('disconnect', () => {
    if (onDisconnect) {
      onDisconnect()
    }
  })
}
