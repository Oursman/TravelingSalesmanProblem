import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoSimpleDisplayComponent } from './geo-simple-display.component';

describe('GeoSimpleDisplayComponent', () => {
  let component: GeoSimpleDisplayComponent;
  let fixture: ComponentFixture<GeoSimpleDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoSimpleDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoSimpleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
