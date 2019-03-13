import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFilterComponentComponent } from './app.filter.component.component';

describe('AppFilterComponentComponent', () => {
  let component: AppFilterComponentComponent;
  let fixture: ComponentFixture<AppFilterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFilterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
