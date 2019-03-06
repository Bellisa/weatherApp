import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHotelItemComponent } from './app.hotel.item/app.hotel.item.component';
import { AppWeatherComponent } from './app.weather/app.weather.component';
import { AppProfileComponent } from './app.profile/app.profile.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AppHotelItemComponent,
    AppWeatherComponent,
    AppProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
