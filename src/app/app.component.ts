import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { getHotels } from '../data/hotels';
import { IHotel } from 'src/interfaces/IHotel';
import { IFavHotel } from 'src/interfaces/IFavHotel';
import { of, Observable } from 'rxjs';
import { debounceTime, delay } from 'rxjs/operators';
import * as fromHotel from './state';
import { Store, select } from '@ngrx/store';
import * as hotelActions from './state/hotel.actions';
import { HotelState } from './state/hotel.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  public selectedHotel$: Observable<IHotel>;
  public hotels$: Observable<IHotel[]>;
  public favHotels$: Observable<IFavHotel[]>;
  public information$: Observable<string>;
  public isLoadingShow$: Observable<boolean>;

  constructor(private store: Store<fromHotel.State>) {

  }

  ngOnInit(): void {
    this.store.dispatch(new hotelActions.Load());
    
    this.isLoadingShow$ = this.store.pipe(select(fromHotel.getLoading));  
    this.hotels$ = this.store.pipe(select(fromHotel.getHoels));
    this.information$ = this.store.pipe(select(fromHotel.getInformation));
    this.selectedHotel$ = this.store.pipe(select(fromHotel.getSelectedHotel));
    this.favHotels$ = this.store.pipe(select(fromHotel.getFavoriteHoels));  

    
  }
  public selectHotel(hotel: IHotel) {
    this.store.dispatch(new hotelActions.SetSelectedHotel(hotel));
  }

  public delFavHotel(hotel: IFavHotel) {
    this.store.dispatch(new hotelActions.DeleteFavoriteHotel(hotel.hotel.id));
  }
public clearInformation(){
  this.store.dispatch(new hotelActions.ClearInfo());
}
  public favClick(event: { hotel: IHotel, addedFav: boolean }) {
    if (!event.addedFav) {
      const el = { hotel: event.hotel, voted: 0 };
      this.store.dispatch(new hotelActions.AddFavoriteHotel(el));
    }
    else {
      this.store.dispatch(new hotelActions.DeleteFavoriteHotel(event.hotel.id));
    }
  }
}

