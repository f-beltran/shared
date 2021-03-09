import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [CommonModule, MatSliderModule],
  declarations: [FooComponent],
  exports: [FooComponent, MatSliderModule],
})
export class SharedUiMaterialModule {}
