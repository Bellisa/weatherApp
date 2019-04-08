import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromHotel from '../hotels/state';
import * as hotelActions from '../hotels/state/hotel.actions';
import { Store, select } from '@ngrx/store';
import { IHotel } from 'src/interfaces/IHotel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public randomHotels: IHotel[];
  public subscription: Subscription;

  constructor(private store: Store<fromHotel.State>, ) { }

  ngOnInit() {
    this.store.dispatch(new hotelActions.Load());
    this.subscription = this.store.pipe(select(fromHotel.getHoels))
      .subscribe(hotels => {
        this.randomHotels = this.getRandom([1, 2, 3], hotels);
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private getRandom(count: number[], hotels: IHotel[]): IHotel[] {
    return (count.map(el => (hotels[Math.floor(Math.random() * hotels.length)])));
    //[Math.floor(Math.random()*items.length)]
  }
}
