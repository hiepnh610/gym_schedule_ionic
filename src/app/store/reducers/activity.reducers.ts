import {
  ActivityActions,
  EActivityActions
} from '@store/actions/activity.actions';
import {
  initialListActivitiesState
} from '@store/state/listActivities.state';
import { IAppState } from '@store/state/app.state';

export const activityReducers = (
  state = initialListActivitiesState,
  action: ActivityActions
): IAppState => {
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
};
