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
const getProductFeatureState = createFeatureSelector<fromUser.UserState>('users');

export const getCurentUser = createSelector(
  getProductFeatureState,
  state => state.currentUser
);
