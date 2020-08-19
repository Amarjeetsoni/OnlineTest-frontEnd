import { TestBed } from '@angular/core/testing';

import { CalculateServiceService } from './calculate-service.service';

describe('CalculateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculateServiceService = TestBed.get(CalculateServiceService);
    expect(service).toBeTruthy();
  });
});
