import { TestBed } from '@angular/core/testing';

import { AllMachinesService } from './all-machines.service';

describe('AllMachinesService', () => {
  let service: AllMachinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllMachinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
