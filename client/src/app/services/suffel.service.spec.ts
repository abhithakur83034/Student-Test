import { TestBed } from '@angular/core/testing';

import { SuffelService } from './suffel.service';

describe('SuffelService', () => {
  let service: SuffelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuffelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
