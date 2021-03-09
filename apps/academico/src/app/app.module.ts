import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedUiMaterialModule } from '@ucb/shared/ui-material';
import { AppRoutingModule } from './app-routing.module';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [AppComponent, BarComponent],
  imports: [BrowserModule, SharedUiMaterialModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
