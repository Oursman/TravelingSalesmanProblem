import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoPointRowComponent } from './geo-point-row.component';

describe('GeoPointRowComponent', () => {
  let component: GeoPointRowComponent;
  let fixture: ComponentFixture<GeoPointRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoPointRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoPointRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
