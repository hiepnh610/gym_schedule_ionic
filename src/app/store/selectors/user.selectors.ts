import { createSelector } from '@ngrx/store';

import { IAppState } from '@store/state/app.state';

const selectUserState = (state: IAppState) => state;

export const selectUser = createSelector(
  selectUserState,
  (state: IAppState) => state.user
);
