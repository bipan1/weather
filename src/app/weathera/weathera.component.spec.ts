import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatheraComponent } from './weathera.component';

describe('WeatheraComponent', () => {
  let component: WeatheraComponent;
  let fixture: ComponentFixture<WeatheraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatheraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatheraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
