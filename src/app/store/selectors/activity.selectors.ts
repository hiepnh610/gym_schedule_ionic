import { createSelector } from '@ngrx/store';

import { IAppState } from '@store/state/app.state';
import { IActivityState } from '@store/state/listActivities.state';

const selectActivities = (state: IAppState) => state.listActivities;

export const selectActivityList = createSelector(
  selectActivities,
  (state: IActivityState) => state.listActivities
);
