// Homework
import { IUser } from '../../../interfaces/IUser';
import * as fromUser from './user.reducer';
/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.actions';
import { UserState } from './user.reducer';

export interface State  {
  users: fromUser.UserState;
}
// Selector functions
const getUserFeatureState = createFeatureSelector<fromUser.UserState>('users');

export const getCurentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);
