import { Action } from '@ngrx/store';

import { IActivityHttp } from '@models/http-models/activity-http.interface';

export enum EActivityActions {
  getActivities = '[Activity] Get Activities',
  getActivitiesSuccess = '[Activity] Get Activities Success'
}

export class GetActivities implements Action {
  public readonly type = EActivityActions.getActivities;
}

export class GetActivitiesSuccess implements Action {
  public readonly type = EActivityActions.getActivitiesSuccess;
  constructor(public payload: IActivityHttp) {}
}

export type ActivityActions = GetActivities | GetActivitiesSuccess;
