import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFavHotel } from 'src/interfaces/IFavHotel';

@Component({
  selector: 'app-fav-hotel-item',
  templateUrl: './fav.hotel.item.component.html',
  styleUrls: ['./fav.hotel.item.component.css']
})
export class FavHotelItemComponent {
  @Input()
  public favHotel: IFavHotel;
  @Output()
  public favHotelDel: EventEmitter<IFavHotel> = new EventEmitter();

  public favhotelDel() {
    this.favHotelDel.emit(this.favHotel);
  }

}
