import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionarTipoDePersonaComponent } from './seleccionar-tipo-de-persona/seleccionar-tipo-de-persona.component';
import { PasosDeRegistroComponent } from './pasos-de-registro/pasos-de-registro.component';

const registrarPersonaRutas: Routes = [
  {
    path: 'registrarPersona',
    children: [
      { path: '', redirectTo: 'tipoDePersona', pathMatch: 'full' },
      { path: 'tipoDePersona', component: SeleccionarTipoDePersonaComponent },
      { path: 'pasosDeRegistro', component: PasosDeRegistroComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(registrarPersonaRutas)],
  exports: [RouterModule],
})
export class RegistrarPersonaRutasModule {}
