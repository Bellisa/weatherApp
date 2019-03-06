import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-weather',
  templateUrl: './app.weather.component.html',
  styleUrls: ['./app.weather.component.css']
})
export class AppWeatherComponent implements OnInit {

  @Input()
  public Weather: IWeather;

  public cssIcons: { [key: string]: string } = {
    ["sun"] : "fas fa-sun",
    ["rain"] : "fas fa-cloud-rain",
    ["cloud"] : "fas fa-cloud-sun"
    
  }
  constructor() { }

  ngOnInit() {
  }

}
