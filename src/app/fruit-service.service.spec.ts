import { TestBed } from '@angular/core/testing';

import { FruitServiceService } from './fruit-service.service';

describe('FruitServiceService', () => {
  let service: FruitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
