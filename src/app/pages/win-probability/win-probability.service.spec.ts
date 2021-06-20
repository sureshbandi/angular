import { TestBed } from '@angular/core/testing';

import { WinProbabilityService } from './win-probability.service';

describe('WinProbabilityService', () => {
  let service: WinProbabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinProbabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
