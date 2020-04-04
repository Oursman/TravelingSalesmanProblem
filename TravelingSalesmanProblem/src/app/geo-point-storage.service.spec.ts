import { TestBed } from '@angular/core/testing';

import { GeoPointStorageService } from './geo-point-storage.service';

describe('GeoPointStorageService', () => {
  let service: GeoPointStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoPointStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
