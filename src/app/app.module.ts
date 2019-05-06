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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { from } from 'rxjs';
import { UserModule } from './user/user.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { HotelsPageComponent } from './hotels/hotels-page.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbAlertComponent } from './components/ngb-alert/ngb-alert.component';
import { reducerRoot } from './state/root.reducer';
import { HotelCarouselComponent } from './home/hotel-carousel/hotel-carousel.component';
import { ShowControlAuthDirective } from './components/directive/show-control-auth.directive';
import { ApiInterceptor } from './interceptor/api.interceptor';
import { UserlService } from 'src/services/user.service';
import { BaseService } from 'src/services/base.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent, 
    HomeComponent, HotelCarouselComponent, 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    HotelModule,
    StoreModule.forRoot({ root: reducerRoot }),
    EffectsModule.forRoot([]),
    HttpClientModule,
    UserModule,
    ReactiveFormsModule,
   AppRoutingModule,

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],

  providers: [
    BaseService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

