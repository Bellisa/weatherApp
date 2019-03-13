import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App.Fav.HotelsComponent } from './app.fav.hotels.component';

describe('App.Fav.HotelsComponent', () => {
  let component: App.Fav.HotelsComponent;
  let fixture: ComponentFixture<App.Fav.HotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App.Fav.HotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App.Fav.HotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
