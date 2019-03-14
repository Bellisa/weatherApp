import { Component, OnInit } from '@angular/core';
import { getHotels } from '../data/hotels';
import { IHotel } from 'src/interfaces/IHotel';
import { IFavHotel } from 'src/interfaces/IFavHotel';
import { of } from 'rxjs';
import { debounceTime, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public selectedHotel: IHotel;
  public hotels: IHotel[] = null;
  public favHotels: IFavHotel[] = null;
  public information: string;
  public isLoadingShow = true;

  ngOnInit(): void {
    of(getHotels())
      .pipe(
        delay(3000))
      .subscribe((res) => {
        this.isLoadingShow = false;
        this.hotels = res;
        if (this.hotels && this.hotels.length > 0) {
          this.selectedHotel = this.hotels[0];
        }
      });
  }

  public selectHotel(hotel: IHotel) {
    this.selectedHotel = hotel;
  }

  public delFavHotel(hotel: IFavHotel) {
    if (this.delHotel(hotel.hotel)) {
      this.information = `Hotel '${hotel.hotel.title}' was delete from favorite!`;
    }
    else {
      this.information = `Hotel '${hotel.hotel.title}' can't delete from favorite!`;
    }
  }

  public favClick(event: any) {
    if (!this.favHotels) {
      this.favHotels = [];
    }

    if (!event.addedFav) {
      const el = { hotel: event.hotel, voted: 0 };
      this.favHotels.push(el);
      this.information = `Hotel '${event.hotel.title}' added to favorite!`;
    }
    else {
      if (this.delHotel(event.hotel)) {
        this.information = `Hotel '${event.hotel.title}' was delete from favorite!`;
      }
      else {
        this.information = `Hotel '${event.hotel.title}' can't delete from favorite!`;
      }
    }
  }

  private delHotel(hotel: IHotel): boolean {
    const index = this.favHotels.findIndex(el => el.hotel.id === hotel.id);

    if (index !== -1) {
      this.favHotels.splice(index, 1);
      return true;
    }
    return false;
  }
}

