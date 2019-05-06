import { Injectable, InjectionToken } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, switchMap, delay } from 'rxjs/operators';

import { UserlService } from '../../../services/user.service';
import { IUser } from '../../../interfaces/IUser';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userAction from './user.actions';

@Injectable()
export class UserEffects {

    constructor(private userService: UserlService,
        private actions$: Actions) { }

    @Effect()
    GetUser$: Observable<Action> = this.actions$.pipe(
        ofType(userAction.UserActionTypes.LoadUser),
        map((action: userAction.LoadUser) => action),
        mergeMap(action =>
            this.userService.getUser(action.userName, action.password).
                pipe(                    
                    map(updatedUser => {
                        if(updatedUser===null)
                        console.log('GetUser$'+updatedUser);
                        return (new userAction.LoadUserSuccess(updatedUser))
                    }),
                    catchError(err => of(new userAction.LoadUserFail(err)))
                )

        )
    );

    @Effect()
    updateUser$: Observable<Action> = this.actions$.pipe(
        ofType(userAction.UserActionTypes.UpdateUser),
        map((action: userAction.UpdateUser) => action.payload),
        mergeMap((user: IUser) =>
            this.userService.updateUser(user).pipe(
                map(updatedUser => (new userAction.UpdateUserSuccess(updatedUser))),
                catchError(err => of(new userAction.UpdateUserFail(err)))
            )
        )
    );

    @Effect()
    createUser$: Observable<Action> = this.actions$.pipe(
        ofType(userAction.UserActionTypes.CreateUser),
        map((action: userAction.CreateUser) => action.payload),
        mergeMap((user: IUser) => {
            console.log('createUser$'+user);
            return this.userService.createUser(user).pipe(
                map(newHotel => (new userAction.CreateUserSuccess(newHotel))),
                catchError(err => of(new userAction.CreateUserFail(err)))
            )
        }
        )
    );

    @Effect()
    deleteHotel$: Observable<Action> = this.actions$.pipe(
        ofType(userAction.UserActionTypes.DeleteUser),
        map((action: userAction.DeleteUser) => action.payload),
        mergeMap((id: number) =>
            this.userService.deleteUser(id).pipe(
                map(() => (new userAction.DeleteUserSuccess(id))),
                catchError(err => of(new userAction.DeleteUserFail(err)))
            )
        )
    );
}