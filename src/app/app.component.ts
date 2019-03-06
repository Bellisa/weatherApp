import { Component, OnInit } from '@angular/core';
import { getHotels } from '../data/hotels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public SelectedHotel: IHotel;
  get Weather(): IWeather { return this.SelectedHotel.weather }
  get Profile(): IProfile { return this.SelectedHotel.profile }


  public Hotels: IHotel[] = null;
  title = 'weatherApp';

  ngOnInit(): void {
    this.Hotels = getHotels();
    if (this.Hotels && this.Hotels.length > 0) {
      this.SelectedHotel = this.Hotels[0];
    }
  }

  public SelectHotel(hotel: IHotel) {
    this.SelectedHotel = hotel;
  }
}
