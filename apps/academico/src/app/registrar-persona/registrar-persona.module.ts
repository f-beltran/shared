import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeleccionarTipoDePersonaComponent } from './seleccionar-tipo-de-persona/seleccionar-tipo-de-persona.component';
import { PasosDeRegistroComponent } from './pasos-de-registro/pasos-de-registro.component';
import { RegistrarPersonaRutasModule } from './registrar-persona-rutas.module';

@NgModule({
  declarations: [SeleccionarTipoDePersonaComponent, PasosDeRegistroComponent],
  imports: [CommonModule, RegistrarPersonaRutasModule],
})
export class RegistrarPersonaModule {}
