import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHotel } from '../../../../interfaces/IHotel';

@Component({
  selector: 'hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent {
  @Input()
  public hotel: IHotel;
  @Input()
  public addedFav: boolean;
  @Input()
  public activeItem: boolean;
  @Input()
  public class: string;

  @Output()
  public hotelClickEvent: EventEmitter<IHotel> = new EventEmitter();
  @Output()
  public favClickEvent: EventEmitter<IHotel> = new EventEmitter();

  public selectHotel(event: MouseEvent) {
   /* if (event.toElement.className === "favDel fas fa-heart ml-3"
      || event.toElement.className === "favAd fas fa-heart ml-3")
      return;*/
    this.hotelClickEvent.emit(this.hotel);
  }

  public setClass() {
    return (this.addedFav) ? "favAd fas fa-heart ml-3" : "favDel fas fa-heart ml-3";
  }

  public setTitle() {
    return (!this.addedFav) ? "Add to favorite" : "Delete from favorite";
  }

  public addOrDelFav(event:Event) {
    event.stopPropagation();
    this.favClickEvent.emit(this.hotel);
  }
}
