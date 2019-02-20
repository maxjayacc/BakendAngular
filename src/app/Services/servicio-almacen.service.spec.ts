import { TestBed } from '@angular/core/testing';

import { ServicioAlmacenService } from './servicio-almacen.service';

describe('ServicioAlmacenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioAlmacenService = TestBed.get(ServicioAlmacenService);
    expect(service).toBeTruthy();
  });
});
