import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fav.Hotel.ItemComponent } from './fav.hotel.item.component';

describe('Fav.Hotel.ItemComponent', () => {
  let component: Fav.Hotel.ItemComponent;
  let fixture: ComponentFixture<Fav.Hotel.ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fav.Hotel.ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fav.Hotel.ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
