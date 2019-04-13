import { NgModule } from '@angular/core';
/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/hotel.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HotelEffects } from './state/hotel.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { HotelListComponent } from './hotel-list/hotel-list.component';
import { AppFilterComponentComponent } from '../components/app.filter.component/app.filter.component.component';
import { FilterPipe } from '../components/pipes/filter.pipe';
import { SortingPipe } from '../components/pipes/sorting.pipe';
import { AppSortComponent } from '../components/app.sort/app.sort.component';
import { AppFavHotelsComponent } from '../favHotels/app.fav.hotels/app.fav.hotels.component';
import { FavHotelItemComponent } from '../favHotels/app.fav.hotels/fav.hotel.item/fav.hotel.item.component';
import { ShortDescriptionPipe } from '../components/pipes/short-description.pipe';
import { NgbAlertComponent } from '../components/ngb-alert/ngb-alert.component';
import { HotelItemComponent } from './hotel-list/hotel-item/hotel-item.component';
import { SelectedHotelComponent } from './selected-hotel/selected-hotel.component';
import { HotelsPageComponent } from './hotels-page.component';
import { AppWeatherComponent } from '../components/app.weather/app.weather.component';
import { AppProfileComponent } from '../components/app.profile/app.profile.component';
import { HotelsDetailsComponent } from './hotels-details/hotels-details.component';
import { HotelAddEditComponent } from './hotel-add-edit/hotel-add-edit.component';
import { HotelsComponent } from "./hotels/HotelsComponent";
import { RouterModule } from '@angular/router';
import { ShowControlAuthDirective } from '../components/directive/show-control-auth.directive';

@NgModule({
  declarations: [
   ShortDescriptionPipe,
   AppFilterComponentComponent,
   NgbAlertComponent, 
    AppSortComponent,
    HotelItemComponent,
    HotelListComponent,
    SelectedHotelComponent,
    HotelsPageComponent,
    AppWeatherComponent,
    AppProfileComponent,
    AppFavHotelsComponent,
    FavHotelItemComponent,
    HotelsDetailsComponent,
    HotelAddEditComponent,
    HotelsComponent,ShowControlAuthDirective

  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('hotels', reducer),
    EffectsModule.forFeature([HotelEffects]),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HotelsComponent,
    HotelsPageComponent,
    SelectedHotelComponent
  ]
})
export class HotelModule { }
