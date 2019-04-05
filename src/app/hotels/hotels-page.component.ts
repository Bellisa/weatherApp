import { Component, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IHotel } from 'src/interfaces/IHotel';
import { IFavHotel } from 'src/interfaces/IFavHotel';
import { Store, select } from '@ngrx/store';

import * as fromHotel from './state';
import * as hotelActions from './state/hotel.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { IConfigData } from 'src/interfaces/IConfigData';
import { appSortType } from '../components/app.sort/appSortType';
import { filterType } from '../components/app.filter.component/typeFilter';

@Component({
  selector: 'app-hotels-page',
  templateUrl: './hotels-page.component.html',
  styleUrls: ['./hotels-page.component.css']
})
export class HotelsPageComponent implements OnInit {

  public selectedHotel$: Observable<IHotel>;
  public hotels$: Observable<IHotel[]>;
  public favHotels$: Observable<IFavHotel[]>;
  public information$: Observable<string>;
  public isLoadingShow$: Observable<boolean>;

  public configPage: IConfigData = {
    filter: null,
    sort: null,
    page: {
      pageNumber: 1,
      pageLimit: 5
    }
  }
  public countPage$: Observable<number>;


  constructor(
    private store: Store<fromHotel.State>,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {
  }
  private RefreshStore() {
    this.store.dispatch(new hotelActions.Load(this.configPage));
    this.store.dispatch(new hotelActions.LoadCount(this.configPage));
  }
  ngOnInit(): void {

    this.RefreshStore();

    this.countPage$ = this.store.pipe(select(fromHotel.getHoelsCount));

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
  public clearInformation() {
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

  public pageChange(ev: number) {
    console.log(ev);
    this.configPage.page.pageNumber = ev;
    this.RefreshStore();
  }

  public changeSort(sort: appSortType) {
    this.configPage.sort = { ...sort };
    this.RefreshStore();
  }

  public changeFilter(filter: filterType) {
    this.configPage.filter = null;
    if (filter.text.length == 0 && filter.star == 0) {      
      this.RefreshStore();
      return;
    }
    this.configPage.filter=[];
    if (filter.text.length > 0) {

      this.configPage.filter.push({field:'title',text:filter.text})
      //this.configPage.filter.push({field:'description',text:filter.text});
    }
    if (filter.star > 0) {
      this.configPage.filter.push({field:'stars',text:filter.star.toString()});
    }

    this.RefreshStore();
  }
}
