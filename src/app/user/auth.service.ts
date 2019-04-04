import { Injectable, OnInit, OnDestroy } from '@angular/core';

import { IUser } from '../../interfaces/IUser';
import { UserState } from './state/user.reducer';
import { Store, select } from '@ngrx/store';
import * as fromUser from './state';
import { Observable, Subscription } from 'rxjs';
import * as userActions from './state/user.actions';

@Injectable({
    providedIn: 'root',
})
export class AuthService implements OnInit, OnDestroy {
    public currentUser: IUser;
    private subUser: Subscription;

    constructor(private store: Store<fromUser.State>) { }
    
    ngOnInit(): void {
        this.subUser = this.store.pipe(select(fromUser.getCurentUser))
            .subscribe((val: IUser) => { this.currentUser = val; });
    }
    ngOnDestroy(): void {
        this.subUser.unsubscribe();
    }
    isLoggedIn(): boolean {
        return (this.currentUser ? true : false);
    }

    login(userName: string, password: string): void {
        this.store.dispatch(new userActions.LoadUser(userName, password))
    }

    logout(): void {
        if (this.currentUser)
            {
                this.store.dispatch(new userActions.DeleteUser(this.currentUser.id))
            }
    }
}