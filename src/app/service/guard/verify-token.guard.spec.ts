import { TestBed } from '@angular/core/testing';

import { VerifyTokenGuard } from './verify-token.guard';

describe('VerifyTokenGuard', () => {
  let guard: VerifyTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifyTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
