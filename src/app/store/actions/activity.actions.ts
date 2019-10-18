import { Action } from '@ngrx/store';

import { ILikeParams } from '@models/activity.interface';
import { IActivityHttp } from '@models/http-models/activity-http.interface';

export enum EActivityActions {
  getActivities = '[Activity] Get Activities',
  getActivitiesSuccess = '[Activity] Get Activities Success',
  likeActivity = '[Activity] Like Activity',
  likeActivitySuccess = '[Activity] Like Activity Success'
}

export class GetActivities implements Action {
  public readonly type = EActivityActions.getActivities;
}

export class GetActivitiesSuccess implements Action {
  public readonly type = EActivityActions.getActivitiesSuccess;
  constructor(public payload: IActivityHttp) {}
}

export class LikeActivity implements Action {
  public readonly type = EActivityActions.likeActivity;
  constructor(public payload: ILikeParams) {}
}

export class LikeActivitySuccess implements Action {
  public readonly type = EActivityActions.likeActivitySuccess;
  constructor(public payload: any) {}
}

export type ActivityActions =
GetActivities |
GetActivitiesSuccess |
LikeActivity |
LikeActivitySuccess;
