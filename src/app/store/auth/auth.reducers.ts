import { createReducer, on } from '@ngrx/store';
import { authState } from './auth.actions';

export const initialState = '';

const setToken = createReducer(initialState,
  on(authState, state => state),
);

export function setTokenReducer(state: any, action: any) {
  return setToken(state, action);
}

