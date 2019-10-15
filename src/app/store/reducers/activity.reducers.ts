import {
  ActivityActions,
  EActivityActions
} from '@store/actions/activity.actions';
import {
  initialListActivitiesState
} from '@store/state/listActivities.state';

import { IActivityState } from '@store/state/listActivities.state';

export function activityReducers (
  state = initialListActivitiesState,
  action: ActivityActions
): IActivityState {
  switch (action.type) {
    case EActivityActions.GetActivitiesSuccess: {
      return {
        ...state,
        ...action.payload
      };
    }

    default:
      return state;
  }
}
