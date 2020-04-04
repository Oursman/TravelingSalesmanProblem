import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsImporterComponent } from './points-importer.component';

describe('PointsImporterComponent', () => {
  let component: PointsImporterComponent;
  let fixture: ComponentFixture<PointsImporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsImporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsImporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
