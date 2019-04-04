import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IHotel } from '../interfaces/IHotel';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private hotelsUrl = `${environment.url}/hotels`;

  constructor(private baseService: BaseService ) { }

  getHotels(): Observable<IHotel[]> {
    return this.baseService.gets<IHotel>(this.hotelsUrl)
      .pipe(
        tap(data => console.log('getHotels: ' +(data.length))),//JSON.stringify(data)
        catchError(this.baseService.handleError)
      );
  }
  getHotel(id:number): Observable<IHotel> {
    return this.baseService.get<IHotel>(this.hotelsUrl,id)
      .pipe(
       tap(data => console.log('getHotel:'+JSON.stringify(data))),
        catchError(this.baseService.handleError)
      );
  }

  createHotel(hotel: IHotel): Observable<IHotel> {
    return this.baseService.create<IHotel>(this.hotelsUrl, hotel)
      .pipe(
        tap(data => console.log('createHotel: ' + JSON.stringify(data))),
        catchError(this.baseService.handleError)
      );
  }

  deleteHotel(id: number): Observable<{}> {
    return this.baseService.delete<IHotel>(this.hotelsUrl, id)
      .pipe(
        tap(data => console.log('delete Hotel: ' + id)),
        catchError(this.baseService.handleError)
      );
  }

  updateHotel(hotel: IHotel): Observable<IHotel> {
    return this.baseService.update<IHotel>(this.hotelsUrl, hotel,hotel.id)
      .pipe(
        tap(() => console.log('update Product: ' + hotel.id)),
        // Return the product on an update
        map(() => hotel),
        catchError(this.baseService.handleError)
      );
  }

  patchHotel(hotel: IHotel): Observable<IHotel> {
    return this.baseService.patch<IHotel>(this.hotelsUrl, hotel,hotel.id)
      .pipe(
        tap(() => console.log('updateProduct: ' + hotel.id)),
        // Return the product on an update
        map(() => hotel),
        catchError(this.baseService.handleError)
      );
  }

  

}
