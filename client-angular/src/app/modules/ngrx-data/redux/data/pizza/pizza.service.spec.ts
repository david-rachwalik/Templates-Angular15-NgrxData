import { TestBed } from '@angular/core/testing';

import { PizzaDataService } from './pizza.service';

describe('PizzaService', () => {
  let service: PizzaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
