import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedUiMaterialModule } from '@ucb/shared/ui-material';
import { AppRoutingModule } from './app-routing.module';
import { RegistrarPersonaModule } from './registrar-persona/registrar-persona.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiMaterialModule, AppRoutingModule, RegistrarPersonaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
