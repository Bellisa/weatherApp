import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, switchMap, delay } from 'rxjs/operators';

import { HotelService } from '../../../services/hotel.service';
import { IHotel } from '../../../interfaces/IHotel';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as hotelActions from './hotel.actions';

@Injectable()
export class HotelEffects {

    constructor(private hotelService: HotelService,
        private actions$: Actions) { }

    @Effect()
    loadHotels$: Observable<Action> = this.actions$.pipe(
        delay(3000),
        ofType(hotelActions.HotelActionTypes.Load),
        mergeMap(action =>
            this.hotelService.getHotels().pipe(
                map(hotels => {

                    return (new hotelActions.LoadSuccess(hotels))
                }),
                catchError(err => of(new hotelActions.LoadFail(err)))
            )
        )
    );

    @Effect()
    updateHotel$: Observable<Action> = this.actions$.pipe(
        ofType(hotelActions.HotelActionTypes.UpdateHotel),
        map((action: hotelActions.UpdateHotel) => action.payload),
        mergeMap((hotel: IHotel) =>
            this.hotelService.updateHotel(hotel).pipe(
                map(updatedHotel => (new hotelActions.UpdateHotelSuccess(updatedHotel))),
                catchError(err => of(new hotelActions.UpdateHotelFail(err)))
            )
        )
    );

    @Effect()
    createHotel$: Observable<Action> = this.actions$.pipe(
        ofType(hotelActions.HotelActionTypes.CreateHotel),
        map((action: hotelActions.CreateHotel) => action.payload),
        mergeMap((hotel: IHotel) =>
            this.hotelService.createHotel(hotel).pipe(
                map(newHotel => (new hotelActions.CreateHotelSuccess(newHotel))),
                catchError(err => of(new hotelActions.CreateHotelFail(err)))
            )
        )
    );

    @Effect()
    deleteHotel$: Observable<Action> = this.actions$.pipe(
        ofType(hotelActions.HotelActionTypes.DeleteHotel),
        map((action: hotelActions.DeleteHotel) => action.payload),
        mergeMap((hotelId: number) =>
            this.hotelService.deleteHotel(hotelId).pipe(
                map(() => (new hotelActions.DeleteHotelSuccess(hotelId))),
                catchError(err => of(new hotelActions.DeleteHotelFail(err)))
            )
        )
    );
}