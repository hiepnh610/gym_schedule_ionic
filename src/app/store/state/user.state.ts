import { IUser } from '@models/user.interface';

export const initialUserState: IUser = {
  address: '',
  avatar: '',
  bio: '',
  dob: '',
  email: '',
  following: [],
  full_name: '',
  gender: '',
  height: 0,
  username: '',
  verified: false,
  weight: 0
};
