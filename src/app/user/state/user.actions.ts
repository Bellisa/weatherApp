/* NgRx */
import { Action } from '@ngrx/store';
import { IUser } from 'src/interfaces/IUser';

export enum UserActionTypes {
  LoadUser = '[User] Load',
  LoadUserSuccess = '[User] Load Success',
  LoadUserFail = '[User] Load Fail',

  UpdateUser = '[User] Update User',
  UpdateUserSuccess = '[User] Update User Success',
  UpdateUserFail = '[User] Update User Fail',

  CreateUser = '[User] Create User',
  CreateUserSuccess = '[User] Create User Success',
  CreateUserFail = '[User] Create User Fail',

  DeleteUser = '[User] Delete User',
  DeleteUserSuccess = '[User] Delete User Success',
  DeleteUserFail = '[User] Delete User Fail',

}
export class LoadUser implements Action {
  readonly type = UserActionTypes.LoadUser;
  constructor(public userName: string, public password:string) { }
}
export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LoadUserSuccess;
  constructor(public payload: IUser) { }
}
export class LoadUserFail implements Action {
  readonly type = UserActionTypes.LoadUserFail;
  constructor(public payload: string) { }
}
////////////////////////
export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;
  constructor(public payload: IUser) { }
}
export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UpdateUserSuccess;
  constructor(public payload: IUser) { }
}
export class UpdateUserFail implements Action {
  readonly type = UserActionTypes.UpdateUserFail;
  constructor(public payload: string) { }
}
//////////////////////
export class CreateUser implements Action {
  readonly type = UserActionTypes.CreateUser;
  constructor(public payload: IUser) { }
}
export class CreateUserSuccess implements Action {
  readonly type = UserActionTypes.CreateUserSuccess;
  constructor(public payload: IUser) { }
}
export class CreateUserFail implements Action {
  readonly type = UserActionTypes.CreateUserFail;
  constructor(public payload: string) { }
}
/////////////
export class DeleteUser implements Action {
  readonly type = UserActionTypes.DeleteUser;

  constructor(public payload: number) { }
}
export class DeleteUserSuccess implements Action {
  readonly type = UserActionTypes.DeleteUserSuccess;

  constructor(public payload: number) { }
}

export class DeleteUserFail implements Action {
  readonly type = UserActionTypes.DeleteUserFail;

  constructor(public payload: string) { }
}

export type UserActions = LoadUserSuccess
| LoadUser
| LoadUserFail
| UpdateUser
| UpdateUserSuccess
| UpdateUserFail
| CreateUser
| CreateUserSuccess
| CreateUserFail
| DeleteUser
| DeleteUserSuccess
| DeleteUserFail
;
