import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IFavHotel } from '../interfaces/IFavHotel';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class FavHotelService {
  private hotelsUrl = `${environment.url}/favHotels`;

  constructor(private baseService: BaseService) { }

  getFavHotels(): Observable<IFavHotel[]> {
    return this.baseService.gets<IFavHotel>(this.hotelsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.baseService.handleError)
      );
  }
  getHotel(id: number): Observable<IFavHotel> {
    return this.baseService.get<IFavHotel>(this.hotelsUrl, id)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.baseService.handleError)
      );
  }

  createHotel(hotel: IFavHotel): Observable<IFavHotel> {
    return this.baseService.create<IFavHotel>(this.hotelsUrl, hotel)
      .pipe(
        tap(data => console.log('create favHotel: ' + JSON.stringify(data))),
        catchError(this.baseService.handleError)
      );
  }

  deleteHotel(id: number): Observable<{}> {
    return this.baseService.delete<IFavHotel>(this.hotelsUrl, id)
      .pipe(
        tap(data => console.log('delete Hotel: ' + id)),
        catchError(this.baseService.handleError)
      );
  }

  updateHotel(hotel: IFavHotel): Observable<IFavHotel> {
    return this.baseService.update<IFavHotel>(this.hotelsUrl, hotel, hotel.hotel.id)
      .pipe(
        tap(() => console.log('update Product: ' + hotel.hotel.id)),
        // Return the product on an update
        map(() => hotel),
        catchError(this.baseService.handleError)
      );
  }

  patchHotel(hotel: IFavHotel): Observable<IFavHotel> {
    return this.baseService.patch<IFavHotel>(this.hotelsUrl, hotel, hotel.hotel.id)
      .pipe(
        tap(() => console.log('updateProduct: ' + hotel.hotel.id)),
        // Return the product on an update
        map(() => hotel),
        catchError(this.baseService.handleError)
      );
  }
}
