import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedUiMaterialModule } from '@ucb/shared/ui-material';
import { AppRoutingModule } from './app-routing.module';
import { PersonasModule } from './personas/personas.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiMaterialModule, AppRoutingModule, PersonasModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
