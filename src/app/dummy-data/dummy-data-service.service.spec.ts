import { TestBed, inject } from '@angular/core/testing';

import { DummyDataServiceService } from './dummy-data-service.service';

describe('DummyDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DummyDataServiceService]
    });
  });

  it('should be created', inject([DummyDataServiceService], (service: DummyDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
