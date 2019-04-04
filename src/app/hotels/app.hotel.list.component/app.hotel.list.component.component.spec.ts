import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHotelListComponentComponent } from './app.hotel.list.component.component';

describe('App.Hotel.List.ComponentComponent', () => {
  let component: AppHotelListComponentComponent;
  let fixture: ComponentFixture<AppHotelListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHotelListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHotelListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
