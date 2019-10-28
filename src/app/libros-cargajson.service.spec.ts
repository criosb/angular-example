import { TestBed } from '@angular/core/testing';

import { LibrosCargajsonService } from './libros-cargajson.service';

describe('LibrosCargajsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrosCargajsonService = TestBed.get(LibrosCargajsonService);
    expect(service).toBeTruthy();
  });
});
