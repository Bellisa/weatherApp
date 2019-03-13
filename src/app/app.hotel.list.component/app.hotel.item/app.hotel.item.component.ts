import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHotel } from '../../../interfaces/IHotel';

@Component({
  selector: 'app-app-hotel-item',
  templateUrl: './app.hotel.item.component.html',
  styleUrls: ['./app.hotel.item.component.css']
})
export class AppHotelItemComponent {
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

  public selectHotel(event:MouseEvent) {
    console.log(event.toElement.className);
    if(event.toElement.className === "favDel fas fa-heart ml-3" 
    ||  event.toElement.className === "favAd fas fa-heart ml-3")
    return;
    this.hotelClickEvent.emit(this.hotel);
  }

  public setClass() {
    return (this.addedFav) ? "favAd fas fa-heart ml-3" : "favDel fas fa-heart ml-3";
  }

  public setTitle(){
    return (!this.addedFav) ? "Add to favorite" : "Delete from favorite";
  }

  public addOrDelFav() {
    this.favClickEvent.emit(this.hotel);
  }
}
