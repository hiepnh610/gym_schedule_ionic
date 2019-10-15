import {
  IActivityState
} from './listActivities.state';
import { initialUserState } from './user.state';
import { IUser } from '@models/user.interface';

export interface IAppState {
  listActivities: IActivityState;
  user: IUser;
}

export const initialAppState: IAppState = {
  listActivities: {},
  user: initialUserState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
