import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHotelItemComponent } from './app.hotel.list.component/app.hotel.item/app.hotel.item.component';
import { AppWeatherComponent } from './app.weather/app.weather.component';
import { AppProfileComponent } from './app.profile/app.profile.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppHotelListComponentComponent } from './app.hotel.list.component/app.hotel.list.component.component';
import { AppFilterComponentComponent } from './app.filter.component/app.filter.component.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { AppSortComponent } from './app.sort/app.sort.component';
import { AppFavHotelsComponent } from './app.fav.hotels/app.fav.hotels.component';
import { FavHotelItemComponent } from './app.fav.hotels/fav.hotel.item/fav.hotel.item.component';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';
import { NgbAlertComponent } from './ngb-alert/ngb-alert.component';
import { HotelModule } from './state/hotel.module';

/* NgRx */
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { reducer, HotelState } from './state/hotel.reducer';
import { HotelEffects } from './state/hotel.effects';
import { HttpClientModule } from '@angular/common/http';
import { SelectedHotelComponent } from './selected-hotel/selected-hotel.component';
import { from } from 'rxjs';

const metaReducers: MetaReducer<HotelState>[] = [];
@NgModule({
  declarations: [
    AppComponent,
    AppHotelItemComponent,
    AppWeatherComponent,
    AppProfileComponent,
    AppHotelListComponentComponent,
    AppFilterComponentComponent,
    FilterPipe,
    SortingPipe,
    AppSortComponent,
    AppFavHotelsComponent,
    FavHotelItemComponent,
    ShortDescriptionPipe,
    NgbAlertComponent,
    SelectedHotelComponent
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HotelModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

