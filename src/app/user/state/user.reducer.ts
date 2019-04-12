import { IUser } from '../../../interfaces/IUser';

/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.actions';

// State for this feature (User)
export interface UserState {
  currentUser: IUser;
}

const initialState: UserState = {
  currentUser: null
};

export function reducer(state = initialState, action: UserActions): UserState {
  //console.log('action: '+action.type);
  switch (action.type) {
    case UserActionTypes.LoadUserSuccess:
    console.log('action: aaaaa '+action.type+' '+(action.payload));
    //let temp = (action.payload.length )? action.payload[0]:null;
      return {
        ...state,
        currentUser: action.payload
      };
      case UserActionTypes.DeleteUserSuccess:
      return {
        ...state,
        currentUser: null
      };
      case UserActionTypes.ClearUserSuccess:
      console.log('set reduser clearUser');
      return {
        ...state,
        currentUser: null
      };
      case UserActionTypes.UpdateUserSuccess:
      return {
        ...state,
        currentUser: action.payload
      };
      case UserActionTypes.CreateUser:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
}
