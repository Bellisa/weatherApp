import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-app-hotel-item',
  templateUrl: './app.hotel.item.component.html',
  styleUrls: ['./app.hotel.item.component.css']
})
export class AppHotelItemComponent implements OnInit , OnDestroy{
  

  constructor() { }
  @Input()
  hotel: IHotel;

  @Input()
  activeItem:string

  @Output()
  public HotelClick: EventEmitter<IHotel> = new EventEmitter();

  public SelectHotel() {
    this.HotelClick.emit(this.hotel);
  }
  ngOnInit() {
  }
  
  ngOnDestroy(): void {
    this.HotelClick.unsubscribe();
  }
}
