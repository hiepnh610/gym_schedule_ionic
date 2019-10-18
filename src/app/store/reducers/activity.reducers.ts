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

    case EActivityActions.likeActivitySuccess: {
      const message = action.payload.message ? action.payload.message : '';
      const idActivity = action.payload.id ? action.payload.id : '';

      for (const keyActivity in state) {
        if (state.hasOwnProperty(keyActivity)) {
          for (const activity of state[keyActivity]) {
            if (activity._id === idActivity) {
              if (message === 'Liked') {
                activity.like.status = true;
                activity.like.quantity = activity.like.quantity + 1;
              }

              if (message === 'Unlike.') {
                activity.like.status = false;

                if (activity.like.quantity > 0) {
                  activity.like.quantity = activity.like.quantity - 1;
                }
              }
            }
          }
        }
      }

      return state;
    }

    default:
      return state;
  }
}
