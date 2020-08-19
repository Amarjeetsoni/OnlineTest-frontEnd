import { TestBed } from '@angular/core/testing';

import { ResultAnalysisService } from './result-analysis.service';

describe('ResultAnalysisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultAnalysisService = TestBed.get(ResultAnalysisService);
    expect(service).toBeTruthy();
  });
});
