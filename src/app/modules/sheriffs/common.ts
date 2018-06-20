import { RequestActionState } from '../../infrastructure/Requests/RequestActionBase';
import {
    Sheriff,
    SheriffMap
} from '../../api/index';

export interface SheriffModuleState {
    // Assignments
    sheriffMap?: RequestActionState<SheriffMap>;
    createSheriff?: RequestActionState<Sheriff>;
    updateSheriff?: RequestActionState<Sheriff>;
}

export const STATE_KEY: string = 'sheriffs';