import { TestBed } from '@angular/core/testing';

import { PeliSeleccionadaService } from './peli-seleccionada.service';

describe('PeliSeleccionadaService', () => {
  let service: PeliSeleccionadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliSeleccionadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
