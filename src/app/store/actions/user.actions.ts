import { Action } from '@ngrx/store';

import { IUser } from '@models/user.interface';

export enum EUserAction {
  getUser = '[User] Get User',
  getUserSuccess = '[User] Get User Success'
}

export class GetUser implements Action {
  public readonly type = EUserAction.getUser;
}

export class GetUserSuccess implements Action {
  public readonly type = EUserAction.getUserSuccess;
  constructor(public payload: IUser) {}
}

export type UserActions = GetUser | GetUserSuccess;
