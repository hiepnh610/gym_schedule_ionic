import { Action } from '@ngrx/store';

import { IActivityHttp } from '@models/http-models/activity-http.interface';

export enum EActivityActions {
  getActivities = '[Activity] Get Activities',
  getActivitiesSuccess = '[Activity] Get Activities Success',
  likeActivity = '[Activity] Like',
  unLikeActivity = '[Activity] Un Like'
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
}

export class UnLikeActivity implements Action {
  public readonly type = EActivityActions.unLikeActivity;
}

export type ActivityActions =
GetActivities |
GetActivitiesSuccess |
LikeActivity |
UnLikeActivity;
