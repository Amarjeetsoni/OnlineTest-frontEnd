import { TestBed } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.get(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
