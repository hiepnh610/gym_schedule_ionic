import {
  ActivityActions,
  EActivityActions
} from '../actions/activity.actions';
import {
  initialListActivitiesState
} from '../state/listActivities.state';

export const activityReducers = (
  state = initialListActivitiesState,
  action: ActivityActions
): any => {
  switch (action.type) {
    case EActivityActions.GetActivitiesSuccess: {
      return {
        ...state,
        listActivities: action.payload
      };
    }

    default:
      return state;
  }
};
