import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth.service';

import { takeWhile } from 'rxjs/operators';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromUser from '../state';
import * as userActions from '../state/user.actions';
import * as fromRoot from '../state';
import { IUser } from 'src/interfaces/IUser';
import { Observable } from 'rxjs';
import { isBuffer } from 'util';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  pageTitle = 'Registration';
  errorMessage: string;
  @Input()
  public currentUser: IUser;

  public userNameVar: string;
  public passwordVar: string;

  constructor(private store: Store<fromRoot.State>,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  cancel(): void {
    this.router.navigate(['']);
  }


  login(loginForm: NgForm): void {

    if (loginForm && loginForm.valid) {
      let user: IUser = {
        id: null,
        userName: loginForm.form.value.userName,
        password: loginForm.form.value.password,
        isAdmin: false,
        token: null
      };
      console.log(loginForm);
      this.store.dispatch(new userActions.CreateUser(user));

      this.router.navigate(['/']);

    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
