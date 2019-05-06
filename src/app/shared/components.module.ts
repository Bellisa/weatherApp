import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFilterComponentComponent } from '../components/app.filter.component/app.filter.component.component';
import { NgbAlertComponent } from '../components/ngb-alert/ngb-alert.component';
import { AppWeatherComponent } from '../components/app.weather/app.weather.component';
import { AppSortComponent } from '../components/app.sort/app.sort.component';
import { AppProfileComponent } from '../components/app.profile/app.profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppFilterComponentComponent,
    AppProfileComponent,
    AppSortComponent,
    AppWeatherComponent,
    NgbAlertComponent
  ],
  imports: [    
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports:[
    AppFilterComponentComponent,
    AppProfileComponent,
    AppSortComponent,
    AppWeatherComponent,
    NgbAlertComponent
  ]
})
export class ComponentsModule { }
