import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TSPComputerComponent } from './tspcomputer.component';

describe('TSPComputerComponent', () => {
  let component: TSPComputerComponent;
  let fixture: ComponentFixture<TSPComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TSPComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TSPComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
