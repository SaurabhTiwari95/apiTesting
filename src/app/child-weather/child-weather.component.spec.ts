import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWeatherComponent } from './child-weather.component';

describe('ChildWeatherComponent', () => {
  let component: ChildWeatherComponent;
  let fixture: ComponentFixture<ChildWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
