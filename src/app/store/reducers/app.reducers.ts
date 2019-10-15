import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '@store/state/app.state';
import { activityReducers } from './activity.reducers';
import { userReducers } from './user.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  listActivities: activityReducers,
  user: userReducers
};
