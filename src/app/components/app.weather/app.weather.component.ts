import { Component, OnInit, Input } from '@angular/core';
import { IWeather } from 'src/interfaces/IWeather';

@Component({
  selector: 'app-app-weather',
  templateUrl: './app.weather.component.html',
  styleUrls: ['./app.weather.component.css']
})
export class AppWeatherComponent {

  @Input()
  public weather: IWeather;

  public cssIcons: { [key: string]: string } = {
    ['sun']: 'fas fa-sun',
    ['rain']: 'fas fa-cloud-rain',
    ['cloud']: 'fas fa-cloud-sun',
    ['null']:''
  };
}
