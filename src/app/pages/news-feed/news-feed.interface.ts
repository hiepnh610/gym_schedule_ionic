export interface ISetType {
  reps?: number;
  weight?: number;
}

export interface IExercise {
  'exercise_id'?: string;
  'exercise_log'?: ISetType[];
  'exercise_image'?: string;
  'exercise_name'?: string;
  'exercise_note'?: string;
}
