

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class BaseService {
    headrs = new HttpHeaders({ 'Content-Type': 'application/json' });
    params = new HttpParams();
    constructor(private http: HttpClient) { }

    gets<T>(url: string, headers: HttpHeaders = this.headrs, params: HttpParams = this.params): Observable<T[]> {
        return this.http.get<T[]>(url, { params, headers });
    }

    get<T>(url: string, id: number, headers: HttpHeaders = this.headrs, params: HttpParams = this.params): Observable<T> {
        return this.http.get<T>(`${url}/${id}`, { params, headers });
    }

    create<T>(url: string, data: T, headers: HttpHeaders = this.headrs, params: HttpParams = this.params): Observable<T> {
        return this.http.post<T>(url, data, { params, headers });
    }

    delete<T>(url: string, id: number, headers: HttpHeaders = this.headrs, params: HttpParams = this.params): Observable<{}> {

        return this.http.delete<T>(`${url}/${id}`, { params, headers });
    }

    update<T>(url: string, data: T, id: number, headers: HttpHeaders = this.headrs, params: HttpParams = this.params): Observable<T> {

        return this.http.put<T>(`${url}/${id}`, data, { params, headers });
    }

    patch<T>(url: string, data: T, id: number, headers: HttpHeaders = this.headrs, params: HttpParams = this.params): Observable<T> {
        return this.http.patch<T>(`${url}/${id}`, data, { params, headers });
    }

    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }


}
