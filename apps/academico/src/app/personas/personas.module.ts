import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasRutasModule } from './personas-rutas.module';
import { SeleccionarTipoDePersonaComponent } from './registrar-persona/seleccionar-tipo-de-persona/seleccionar-tipo-de-persona.component';
import { PasosDeRegistroComponent } from './registrar-persona/pasos-de-registro/pasos-de-registro.component';
import { InformacionGeneralPregradoComponent } from './registrar-persona/informacion-general-pregrado/informacion-general-pregrado.component';
import { InformacionGeneralPosgradoComponent } from './registrar-persona/informacion-general-posgrado/informacion-general-posgrado.component';
import { DatosPersonalesComponent } from './registrar-persona/datos-personales/datos-personales.component';
import { VistaPreviaComponent } from './registrar-persona/vista-previa/vista-previa.component';
import { DatosPadresComponent } from './registrar-persona/datos-padres/datos-padres.component';
import { DatosColegioComponent } from './registrar-persona/datos-colegio/datos-colegio.component';
import { DatosSaludComponent } from './registrar-persona/datos-salud/datos-salud.component';
import { AutorizacionComponent } from './registrar-persona/autorizacion/autorizacion.component';
import { PersonaExternaComponent } from './registrar-persona/persona-externa/persona-externa.component';
import { AsignacionDePlanComponent } from './registrar-persona/asignacion-de-plan/asignacion-de-plan.component';
import { TitulacionComponent } from './registrar-persona/titulacion/titulacion.component';
import { ViveConComponent } from './registrar-persona/vive-con/vive-con.component';

@NgModule({
  declarations: [
    SeleccionarTipoDePersonaComponent,
    PasosDeRegistroComponent,
    InformacionGeneralPregradoComponent,
    InformacionGeneralPosgradoComponent,
    DatosPersonalesComponent,
    VistaPreviaComponent,
    DatosPadresComponent,
    DatosColegioComponent,
    DatosSaludComponent,
    AutorizacionComponent,
    PersonaExternaComponent,
    AsignacionDePlanComponent,
    TitulacionComponent,
    ViveConComponent,
  ],
  imports: [CommonModule, PersonasRutasModule],
})
export class PersonasModule {}
