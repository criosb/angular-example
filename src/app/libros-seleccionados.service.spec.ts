import { TestBed } from '@angular/core/testing';

import { LibrosSeleccionadosService } from './libros-seleccionados.service';

describe('LibrosSeleccionadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrosSeleccionadosService = TestBed.get(LibrosSeleccionadosService);
    expect(service).toBeTruthy();
  });
});
