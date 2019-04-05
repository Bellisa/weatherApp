import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IHotel } from 'src/interfaces/IHotel';
import { filterType } from '../../components/app.filter.component/typeFilter';
import { appSortType } from '../../components/app.sort/appSortType';
import { IFavHotel } from 'src/interfaces/IFavHotel';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-app-hotel-list-component',
  templateUrl: './app.hotel.list.component.component.html',
  styleUrls: ['./app.hotel.list.component.component.css']
})
export class AppHotelListComponentComponent {
  @Input()
  public hotels: IHotel[];
  @Input()
  public favHotels: IFavHotel[];
  @Input()
  public activeItemId: number;

  @Output()
  public hotelClick: EventEmitter<IHotel> = new EventEmitter();
  @Output()
  public favClicked: EventEmitter<{ hotel: IHotel, addedFav: boolean }> = new EventEmitter();
  @Output()
  public filter: EventEmitter<filterType> = new EventEmitter();
  @Output()
  public appSort: EventEmitter<appSortType> = new EventEmitter();


  public selectedHotel(hotel: IHotel) {
    this.hotelClick.emit(hotel);
  }

  public filerApply(filter: filterType) {
    this.filter.emit(filter);
  }

  public sortedHotels(appSort: appSortType) {
    this.appSort.emit(appSort);
  }

  public isAddedToFav(hotel: IHotel) {
    return (isNullOrUndefined(this.favHotels) || isNullOrUndefined(this.favHotels.find(el => el.hotel.id === hotel.id))) ? false : true;
  }

  public favAddDelClick(hotel: IHotel) {
    this.favClicked.emit({ hotel: hotel, addedFav: this.isAddedToFav(hotel) });
  }


}
