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
import { AppFavHotelsComponent } from '../favHotels/app.fav.hotels/app.fav.hotels.component';
import { FavHotelItemComponent } from '../favHotels/app.fav.hotels/fav.hotel.item/fav.hotel.item.component';
import { HotelItemComponent } from './hotel-list/hotel-item/hotel-item.component';
import { SelectedHotelComponent } from './selected-hotel/selected-hotel.component';
import { HotelsPageComponent } from './hotels-page.component';
import { HotelsDetailsComponent } from './hotels-details/hotels-details.component';
import { HotelAddEditComponent } from './hotel-add-edit/hotel-add-edit.component';
import { HotelsComponent } from "./hotels/HotelsComponent";
import { RouterModule } from '@angular/router';
import { CanEditDirective } from '../components/directive/can-edit.directive';
import { ComponentsDirectiveModule } from '../shared/components.dirctive.module';
import { ComponentsModule } from '../shared/components.module';
import { ComponentsPipeModule } from '../shared/components.pipe.module';

@NgModule({
  declarations: [
    HotelItemComponent,
    HotelListComponent,
    SelectedHotelComponent,
    HotelsPageComponent,
    AppFavHotelsComponent,
    FavHotelItemComponent,
    HotelsDetailsComponent,
    HotelAddEditComponent,
    HotelsComponent,
    CanEditDirective

  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('hotels', reducer),
    EffectsModule.forFeature([HotelEffects]),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsDirectiveModule,
    ComponentsModule,
    ComponentsPipeModule
    
  ],
  exports: [
    HotelsComponent,
    HotelsPageComponent,
    SelectedHotelComponent
  ]
})
export class HotelModule { }
