/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RootActionTypes, RootActions } from './root.actions';

// State for this feature (User)
export interface RootState {
  info: string;
}

const initialState: RootState = {
  info: ''
};

export function reducerRoot(state = initialState, action: RootActions): RootState {
  //console.log('action: '+action.type);
  switch (action.type) {
    case RootActionTypes.SetInformation:   
      return {
        ...state,
        info: action.payload
      };
      case RootActionTypes.DeleteInformation:
      return {
        ...state,
        info: null
      };
    default:
      return state;
  }
}
