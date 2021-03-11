import { TestBed } from '@angular/core/testing';

import { RegistrarPersonaService } from './registrar-persona.service';

describe('RegistrarPersonaService', () => {
  let service: RegistrarPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
