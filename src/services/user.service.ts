import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map, take, first } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { IUser } from 'src/interfaces/IUser';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserlService {
  private usersUrl = `${environment.url}/users`;

  constructor(private baseService: BaseService) { }

  getUsers(): Observable<IUser[]> {
    return this.baseService.gets<IUser>(this.usersUrl)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
        catchError(this.baseService.handleError)
      );
  }
  getUser(userName: string, password: string): Observable<IUser> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const params: HttpParams = new HttpParams(
      {
        fromObject: {
          userName,
          password,
        }
      }
    );
    return this.baseService.gets<IUser>(this.usersUrl, headers, params)
      .pipe(
        //tap(data => console.log('getUser: ' + (data.length))),
        map((data) => data.length>0?data[0]:null),
        catchError(this.baseService.handleError)
      );
  }

  createUser(user: IUser): Observable<IUser> {
    //console.log(user,this.usersUrl);
    return this.baseService.create<IUser>(this.usersUrl, user)
      .pipe(
        tap(data => console.log('createuser: ' + JSON.stringify(data))),
        
        catchError(this.baseService.handleError)
      );
  }

  deleteUser(id: number): Observable<{}> {
    return this.baseService.delete<IUser>(this.usersUrl, id)
      .pipe(
       // tap(data => console.log('delete user: ' + id)),
        catchError(this.baseService.handleError)
      );
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.baseService.update<IUser>(this.usersUrl, user, user.id)
      .pipe(
       // tap(() => console.log('update user: ' + user.id)),
        // Return the product on an update
        map(() => user),
        catchError(this.baseService.handleError)
      );
  }

  patchUser(user: IUser): Observable<IUser> {
    return this.baseService.patch<IUser>(this.usersUrl, user, user.id)
      .pipe(
       // tap(() => console.log('patcheuser: ' + user.id)),
        // Return the product on an update
        map(() => user),
        catchError(this.baseService.handleError)
      );
  }

}
