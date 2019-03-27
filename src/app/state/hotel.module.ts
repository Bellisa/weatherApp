import { NgModule } from '@angular/core';
/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './hotel.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HotelEffects } from './hotel.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('hotels', reducer),
    EffectsModule.forFeature([HotelEffects])
  ],
  declarations: [
  ]
})
export class HotelModule { }
