import { TestBed } from '@angular/core/testing';

import { HomecuidadorService } from './homecuidador.service';

describe('HomecuidadorService', () => {
  let service: HomecuidadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomecuidadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
