import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasosDeRegistroComponent } from './registrar-persona/pasos-de-registro/pasos-de-registro.component';
import { SeleccionarTipoDePersonaComponent } from './registrar-persona/seleccionar-tipo-de-persona/seleccionar-tipo-de-persona.component';

const personasRutas: Routes = [
  {
    path: 'personas',
    children: [
      { path: '', redirectTo: 'tipoDePersona', pathMatch: 'full' },
      { path: 'tipoDePersona', component: SeleccionarTipoDePersonaComponent },
      { path: 'pasosDeRegistro', component: PasosDeRegistroComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(personasRutas)],
  exports: [RouterModule],
})
export class PersonasRutasModule {}
