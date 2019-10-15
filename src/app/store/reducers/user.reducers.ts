import {
  UserActions,
  EUserAction
} from '@store/actions/user.actions';
import {
  initialUserState
} from '@store/state/user.state';
import { IUser } from '@models/user.interface';

export function userReducers(
  state = initialUserState,
  action: UserActions
): IUser {
  switch (action.type) {
    case EUserAction.getUserSuccess: {
      return {
        ...state,
        ...action.payload
      };
    }

    default:
      return state;
  }
}
