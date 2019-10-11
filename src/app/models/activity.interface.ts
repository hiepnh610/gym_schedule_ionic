interface ISetType {
  reps: number;
  weight: number;
}

interface IExercise {
  'exercise_id': string;
  'exercise_log': ISetType[];
  'exercise_image': string;
  'exercise_name': string;
  'exercise_note': string;
}

interface ICommentType {
  'full_name': string;
  _id: string;
  avatar?: string;
  body: string;
  like: object;
  username: string;
}

export interface IActivity {
  'workout_name': string;
  _id: string;
  created_at: string;
  created_by: string;
  exercises: IExercise[];
  like: object;
  updatedAt: string;
  comment: ICommentType[];
  edited: boolean;
}
