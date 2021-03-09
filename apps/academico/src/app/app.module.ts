import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedUiMaterialModule } from '@ucb/shared/ui-material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
