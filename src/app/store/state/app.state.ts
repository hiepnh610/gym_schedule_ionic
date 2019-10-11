import { RouterReducerState } from '@ngrx/router-store';

import { IActivityState, initialListActivitiesState } from './listActivities.state';

export interface IAppState {
  router?: RouterReducerState;
  listActivities: IActivityState;
}

export const initialAppState: IAppState = {
  listActivities: initialListActivitiesState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
