/* NgRx */
import { Action } from '@ngrx/store';
import { IUser } from 'src/interfaces/IUser';

export enum RootActionTypes {
  SetInformation = '[Root] SetInformation',
  DeleteInformation = '[Root] DeleteInformation',

}
export class SetInformation implements Action {
  readonly type = RootActionTypes.SetInformation;
  constructor(public payload: string) { }
}
export class DeleteInformation implements Action {
  readonly type = RootActionTypes.DeleteInformation;
}

export type RootActions =SetInformation
| DeleteInformation
;
