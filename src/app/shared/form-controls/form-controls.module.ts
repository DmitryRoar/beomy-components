import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectComponent} from './components/select/select.component';
import {MatIconModule} from '@angular/material/icon';
import {ClickOutsideModule} from 'ng-click-outside';
import { OptionComponent } from './components/option/option.component';



@NgModule({
  declarations: [
    SelectComponent,
    OptionComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ClickOutsideModule
  ],
  exports: [
    SelectComponent,
    OptionComponent
  ]
})
export class FormControlsModule { }
