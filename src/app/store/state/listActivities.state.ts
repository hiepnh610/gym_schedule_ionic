import { IActivity } from '@models/activity.interface';

export interface IActivityState {
  [key: string]: IActivity[];
}

export const initialListActivitiesState: IActivityState = {};
