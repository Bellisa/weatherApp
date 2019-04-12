import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as fromHotel from '../state';
import * as hotelActions from '../state/hotel.actions';
import { Subscription, Observable } from 'rxjs';
import { IHotel } from 'src/interfaces/IHotel';

@Component({
  selector: 'app-hotels-details',
  templateUrl: './hotels-details.component.html',
  styleUrls: ['./hotels-details.component.css']
})
export class HotelsDetailsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private subscription:Subscription;
  public hotel$:Observable<IHotel>;
  constructor(private store: Store<fromHotel.State>,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    
    this.subscription = this.activatedRoute.params.subscribe((data: ParamMap) => {
      let id:number = Number(data["hotelID"])||null;
      this.store.dispatch(new hotelActions.GetHotelById(id));

    });
    this.hotel$=this.store.pipe(select(fromHotel.getHotel))
  }

}
