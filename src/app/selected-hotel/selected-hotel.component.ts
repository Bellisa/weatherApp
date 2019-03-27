import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from 'src/interfaces/IHotel';

@Component({
  selector: 'app-selected-hotel',
  templateUrl: './selected-hotel.component.html',
  styleUrls: ['./selected-hotel.component.css']
})
export class SelectedHotelComponent implements OnInit {
  @Input()
  public selectedHotel: IHotel;
  constructor() { }

  ngOnInit() {
  }

}
