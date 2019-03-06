import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App.WeatherComponent } from './app.weather.component';

describe('App.WeatherComponent', () => {
  let component: App.WeatherComponent;
  let fixture: ComponentFixture<App.WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App.WeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App.WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
