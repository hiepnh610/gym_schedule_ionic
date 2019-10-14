import {
  IActivityState
} from './listActivities.state';

export interface IAppState {
  listActivities: IActivityState;
}

export const initialAppState: IAppState = {
  listActivities: {}
};

export function getInitialState(): IAppState {
  return initialAppState;
}
