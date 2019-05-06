import { Injectable, OnInit, OnDestroy, InjectionToken, Inject } from '@angular/core';

import { IUser } from '../../interfaces/IUser';
import { UserState } from './state/user.reducer';
import { Store, select } from '@ngrx/store';
import * as fromUser from './state';
import { Observable, Subscription } from 'rxjs';
import * as userActions from './state/user.actions';

export const TOKEN = new InjectionToken<string>('token');

@Injectable({
    providedIn: 'root',
})
export class AuthService implements OnInit, OnDestroy {
    public currentUser: IUser;
    public currentUser$: Observable<IUser>;
    private subUser: Subscription;

    public getUserToken(): string {
        return localStorage.getItem(TOKEN.toString()) || null;
    }

    public setUserToken(user: IUser): void {
        localStorage.setItem(TOKEN.toString(), user.token);
    }

    public deleteUserToken() {
        localStorage.removeItem(TOKEN.toString());
    }
    constructor(private store: Store<fromUser.State>) {
        this.currentUser$ = this.store.pipe(select(fromUser.getCurentUser));
        this.subUser = this.store.pipe(select(fromUser.getCurentUser))
            .subscribe((val: IUser) => {
                if (val) {
                    this.currentUser = val;
                    this.setUserToken(val);
                }


            });
    }

    ngOnInit(): void {
        console.log('on init')

    }
    ngOnDestroy(): void {
        this.subUser.unsubscribe();
    }
    isLoggedIn(): boolean {
        return (this.currentUser ? true : false);
    }

    login(userName: string, password: string): void {
        this.store.dispatch(new userActions.LoadUser(userName, password));
    }

    logout(): void {
        if (this.currentUser) {

            this.store.dispatch(new userActions.ClearUserSuccess)
        }
    }
}
