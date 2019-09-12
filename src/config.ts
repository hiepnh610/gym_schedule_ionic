interface ApiTypes {
  activities: string;
  activityDetail: string;
  avatar: string;
  comment: string;
  email: string;
  exercise: string;
  follow: string;
  forgotPassword: string;
  images: string;
  likeActivity: string;
  listExercise: string;
  listFollower: string;
  listPlans: string;
  listWorkout: string;
  login: string;
  message: string;
  modifyPassword: string;
  newsFeed: string;
  plans: string;
  profile: string;
  profileActivities: string;
  profileImages: string;
  resendVerificationMail: string;
  resetPassword: string;
  room: string;
  roomAll: string;
  signUp: string;
  unFollow: string;
  upload: string;
  user: string;
  workout: string;
}

const api: ApiTypes = {
  activities: 'activities/',
  activityDetail: 'activity_detail',
  avatar: 'avatar/',
  comment: 'comment/',
  email: 'email-verification',
  exercise: 'exercise/',
  follow: 'follow/',
  forgotPassword: 'forgot-password',
  images: 'images',
  likeActivity: 'like/',
  listExercise: 'list_exercise',
  listFollower: 'list-follower',
  listPlans: 'list_plans',
  listWorkout: 'list_workout',
  login: 'login',
  message: 'message',
  modifyPassword: 'modify_password/',
  newsFeed: 'news-feed/',
  plans: 'plans/',
  profile: 'profile/',
  profileActivities: 'profile_activities/',
  profileImages: 'profile-images',
  resendVerificationMail: 'resend-verification-mail',
  resetPassword: 'reset-password',
  room: 'room/',
  roomAll: 'room/all',
  signUp: 'sign_up',
  unFollow: 'un-follow/',
  upload: 'upload',
  user: 'user/',
  workout: 'workout/'
}

export default { api };
