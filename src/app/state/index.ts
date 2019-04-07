// Homework
import * as fromRoot from './root.reducer';
/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RootActions, RootActionTypes } from './root.actions';
import { RootState } from './root.reducer';

export interface State  {
 root: fromRoot.RootState;
}
// Selector functions
const getRootState = createFeatureSelector<fromRoot.RootState>('root');

export const getInformation = createSelector(
  getRootState,
  state => state.info
);
