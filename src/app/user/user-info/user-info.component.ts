import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/interfaces/IUser';
import { Store, select } from '@ngrx/store';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as fromRoot from '../state';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public currentUser$: Observable<IUser>;
  
  constructor(private store: Store<fromRoot.State>,
    private authService: AuthService,
    private router: Router) { }


  ngOnInit(): void {
    this.currentUser$ = this.store.pipe(select(fromRoot.getCurentUser));
  }

  logOut():void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
