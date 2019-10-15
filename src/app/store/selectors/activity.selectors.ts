import { createSelector } from '@ngrx/store';

import { IAppState } from '@store/state/app.state';

const selectActivitiesState = (state: IAppState) => state;

export const selectActivitiesList = createSelector(
  selectActivitiesState,
  (state: IAppState) => state.listActivities
);
