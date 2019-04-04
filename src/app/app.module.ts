import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AppFavHotelsComponent } from './favHotels/app.fav.hotels/app.fav.hotels.component';
//import { FavHotelItemComponent } from './favHotels/app.fav.hotels/fav.hotel.item/fav.hotel.item.component';

//import { NgbAlertComponent } from './components/ngb-alert/ngb-alert.component';
import { HotelModule } from './hotels/hotel.module';

/* NgRx */
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, HotelState } from './hotels/state/hotel.reducer';
import { HttpClientModule } from '@angular/common/http';

import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { HotelsPageComponent } from './hotels/hotels-page.component';


@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent, 
    FooterComponent, 
    PageNotFoundComponent,
    //HotelsPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    HotelModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    
     UserModule,
    ReactiveFormsModule,
    //RouterModule.forRoot(routes)
    AppRoutingModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

