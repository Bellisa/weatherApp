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

    constructor(private store: Store<fromUser.State>) { 
        this.subUser = this.store.pipe(select(fromUser.getCurentUser))
            .subscribe((val: IUser) => { 
                this.currentUser = val; 
                console.log('set user '+val)
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
        console.log('login user '+userName)
        this.store.dispatch(new userActions.LoadUser(userName, password))
    }

    logout(): void { 
        console.log('clearUser:'+this.currentUser);
        if (this.currentUser)
            {
               
                this.store.dispatch(new userActions.ClearUserSuccess)
            }
    }
}
