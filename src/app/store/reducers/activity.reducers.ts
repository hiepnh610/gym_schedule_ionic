import {
  ActivityActions,
  EActivityActions
} from '@store/actions/activity.actions';
import {
  IActivityState,
  initialListActivitiesState
} from '@store/state/listActivities.state';

export function activityReducers(
  state = initialListActivitiesState,
  action: ActivityActions
): IActivityState {
  switch (action.type) {
    case EActivityActions.getActivitiesSuccess: {
      return {
        ...state,
        ...action.payload
      };
    }

    default:
      return state;
  }
}

export function likeActivityReducers() {}
