import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App.Hotel.ItemComponent } from './app.hotel.item.component';

describe('App.Hotel.ItemComponent', () => {
  let component: App.Hotel.ItemComponent;
  let fixture: ComponentFixture<App.Hotel.ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App.Hotel.ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App.Hotel.ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
