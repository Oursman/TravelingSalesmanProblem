import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoPointTableComponent } from './geo-point-table.component';

describe('GeoPointTableComponent', () => {
  let component: GeoPointTableComponent;
  let fixture: ComponentFixture<GeoPointTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoPointTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoPointTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
