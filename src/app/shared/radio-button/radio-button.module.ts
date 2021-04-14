import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { FormsModule } from '@angular/forms';
import {
  MatRadioModule,
  MAT_RADIO_DEFAULT_OPTIONS,
} from '@angular/material/radio';
@NgModule({
  declarations: [RadioButtonComponent],
  imports: [CommonModule, MatRadioModule, FormsModule],
  exports: [RadioButtonComponent],
})
export class RadioButtonModule {}
