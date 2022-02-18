import { TestBed } from '@angular/core/testing';

import { TibServiceService } from './tib-service.service';

describe('TibServiceService', () => {
  let service: TibServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TibServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
