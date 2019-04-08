import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from 'src/interfaces/IHotel';

@Component({
  selector: 'app-hotel-carousel',
  templateUrl: './hotel-carousel.component.html',
  styleUrls: ['./hotel-carousel.component.css']
})
export class HotelCarouselComponent implements OnInit {
  @Input()
  public hotel: IHotel;
  constructor() { }

  ngOnInit() {
  }

}
