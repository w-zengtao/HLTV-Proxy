import { Team } from './Team';
import { MapSlug } from '../enums/MapSlug';
export declare type VetoType = 'removed' | 'picked' | 'other';
export interface Veto {
    team?: Team;
    map: MapSlug;
    type: VetoType;
}
