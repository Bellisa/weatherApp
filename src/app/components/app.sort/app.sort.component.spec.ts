import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSortComponent } from './app.sort.component';

describe('App.SortComponent', () => {
  let component: AppSortComponent;
  let fixture: ComponentFixture<AppSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
