import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHotelItemComponent } from './hotel-item.component';

describe('App.Hotel.ItemComponent', () => {
  let component: AppHotelItemComponent;
  let fixture: ComponentFixture<AppHotelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHotelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHotelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
