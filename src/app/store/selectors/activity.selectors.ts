import { createSelector } from '@ngrx/store';

import { IAppState } from '@store/state/app.state';

const selectActivities = (state: IAppState) => state;

export const selectActivityList = createSelector(
  selectActivities,
  (state: IAppState) => state.listActivities
);
