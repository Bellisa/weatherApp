import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, switchMap, delay } from 'rxjs/operators';

import { HotelService } from '../../../services/hotel.service';
import { IHotel } from '../../../interfaces/IHotel';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as hotelActions from './hotel.actions';
import { IConfigData } from 'src/interfaces/IConfigData';

@Injectable()
export class HotelEffects {

    constructor(private hotelService: HotelService,
        private actions$: Actions) { }

    @Effect()
    loadHotels$: Observable<Action> = this.actions$.pipe(
        ofType(hotelActions.HotelActionTypes.Load),
        map((action: hotelActions.Load) => action.payload),
        mergeMap((conf: IConfigData) =>{
       // console.log('Effect:'+JSON.stringify(conf));
             return this.hotelService.getHotels(conf).pipe(
                map(hotels => {

                    return (new hotelActions.LoadSuccess(hotels))
                }),
                catchError(err => of(new hotelActions.LoadFail(err)))
            )
        }
        )
    );
    @Effect()
    loadHotelsCount$: Observable<Action> = this.actions$.pipe(       
        ofType(hotelActions.HotelActionTypes.LoadCount),
        map((action: hotelActions.LoadCount) => action.payload),
        mergeMap((conf: IConfigData)=>{
            //conf.page=null;
             return this.hotelService.getHotels({...conf,page:null}).pipe(
                map(hotels => {
                  //  console.log(conf + ' action  ' + hotels)
                    return (new hotelActions.LoadCountSuccess(hotels ? hotels.length : 0))
                }),
                catchError(err => of(new hotelActions.LoadCountFail(err)))
            )
        }
        )
    );
    @Effect()
    getHotelById$: Observable<Action> = this.actions$.pipe(       
        ofType(hotelActions.HotelActionTypes.GetHotelById),
        map((action: hotelActions.GetHotelById) => action.payload),
        mergeMap((id: number)=>{
            //conf.page=null;
             return this.hotelService.getHotel(id).pipe(
                map(hotels => {
                  //  console.log(conf + ' action  ' + hotels)
                    return (new hotelActions.GetHotelByIdSuccess(hotels))
                }),
                catchError(err => of(new hotelActions.GetHotelByIdFail(err)))
            )
        }
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