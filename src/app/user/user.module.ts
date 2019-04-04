import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserEffects } from './state/user.effects';
import { EffectsModule } from '@ngrx/effects';
import { AuthGuard } from './auth-guard.service';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature([UserEffects]),
    CommonModule,
    FormsModule , 
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    UserInfoComponent
  ],
  exports: [
    CommonModule,
    FormsModule , 
    LoginComponent,
    ReactiveFormsModule,
    UserInfoComponent
  ]
})
export class UserModule { }
