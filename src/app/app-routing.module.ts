import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HotelsPageComponent } from './hotels/hotels-page.component';
import { AppComponent } from './app.component';
//import { LoginComponent } from './user/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './user/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AuthGuard } from './user/auth-guard.service';
import { UserModule } from './user/user.module';
export const routes: Routes = [
  {
    path: '', redirectTo: 'hotels', pathMatch: 'full'
  },
  {
    path: 'hotels', component: HotelsPageComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'login/edit', component: LoginComponent, pathMatch: 'full',canActivate: [AuthGuard]
  },
  {
    path: 'login/registration', component: RegistrationComponent, pathMatch: 'full',canActivate: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }  
];
@NgModule({
  declarations: [  
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
