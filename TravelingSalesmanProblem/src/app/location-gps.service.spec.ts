import { TestBed } from '@angular/core/testing';

import { LocationGPSService } from './location-gps.service';

describe('LocationGPSService', () => {
  let service: LocationGPSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationGPSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
