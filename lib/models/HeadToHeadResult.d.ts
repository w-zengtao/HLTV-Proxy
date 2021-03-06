import { Team } from './Team';
import { Event } from './Event';
import { MapSlug } from '../enums/MapSlug';
export interface HeadToHeadResult {
    date: number;
    winner?: Team;
    event: Event;
    map: MapSlug;
    result: string;
}
