import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

import { takeWhile } from 'rxjs/operators';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromUser from './state';
import * as userActions from './state/user.actions';
import * as fromRoot from './state';
import { IUser } from 'src/interfaces/IUser';
import { Observable, Subscription } from 'rxjs';
enum enPageType {
  login = ' Log In',
  edit = 'edit',
  registration = 'registration',
  unknown = 'unknown'
}
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {


  pageType: enPageType;
  errorMessage: string;
  public currentUser: IUser;
  subcurrentUser: Subscription;

  constructor(private store: Store<fromRoot.State>,
    private authService: AuthService,
    private router: Router, activeRoute: ActivatedRoute) {
    if (activeRoute.snapshot.url.length > 1)
      this.pageType = activeRoute.snapshot.url[1] as unknown as enPageType;
    else
      this.pageType = enPageType.login;
  }
  ngOnInit(): void {
    this.subcurrentUser = this.store.pipe(select(fromRoot.getCurentUser)).subscribe(
      (user: IUser) => {
        this.currentUser = user;
        if (this.currentUser != null)
          this.pageType = enPageType.edit;
      }
    );

  }


  ngOnDestroy(): void {
    this.subcurrentUser.unsubscribe;
  }

  cancel(): void {
    this.router.navigate(['']);
  }


  login(loginForm: NgForm): void {

    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      console.log(userName, password);
      this.authService.login(userName, password);

      this.router.navigate(['/']);

    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
