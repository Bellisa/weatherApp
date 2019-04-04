import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { getHotels } from '../data/hotels';
import { IHotel } from 'src/interfaces/IHotel';
import { IFavHotel } from 'src/interfaces/IFavHotel';
import { of, Observable } from 'rxjs';
import { debounceTime, delay } from 'rxjs/operators';
import * as fromHotel from './hotels/state';
import { Store, select } from '@ngrx/store';
import * as hotelActions from './hotels/state/hotel.actions';
import { HotelState } from './hotels/state/hotel.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {


  constructor(private store: Store<fromHotel.State>) {

  }

  ngOnInit(): void {
   
  }
}

