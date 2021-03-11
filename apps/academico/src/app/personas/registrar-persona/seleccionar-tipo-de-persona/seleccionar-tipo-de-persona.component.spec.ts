import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarTipoDePersonaComponent } from './seleccionar-tipo-de-persona.component';

describe('SeleccionarTipoDePersonaComponent', () => {
  let component: SeleccionarTipoDePersonaComponent;
  let fixture: ComponentFixture<SeleccionarTipoDePersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarTipoDePersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarTipoDePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
