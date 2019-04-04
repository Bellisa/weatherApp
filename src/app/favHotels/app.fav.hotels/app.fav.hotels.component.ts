import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHotel } from 'src/interfaces/IHotel';
import { IFavHotel } from 'src/interfaces/IFavHotel';

@Component({
  selector: 'app-app-fav-hotels',
  templateUrl: './app.fav.hotels.component.html',
  styleUrls: ['./app.fav.hotels.component.css']
})
export class AppFavHotelsComponent {
  @Input()
  public favHotels: IFavHotel[];
  @Output()
  public favDelClicked: EventEmitter<IFavHotel> = new EventEmitter();

  public delFavHotel(favHot: IFavHotel) {
    this.favDelClicked.emit(favHot);
  }
}
