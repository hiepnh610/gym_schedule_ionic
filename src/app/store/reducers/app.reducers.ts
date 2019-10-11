import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '@store/state/app.state';
import { activityReducers } from './activity.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  listActivities: activityReducers
};
