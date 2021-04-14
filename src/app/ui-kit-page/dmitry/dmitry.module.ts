import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DmitryRoutingModule} from './dmitry-routing.module';

import {MaterialModule} from '../../shared/material-module/material.module';
import {DotModule} from '../../shared/dot-module/dot.module';
import {ImagesModule} from '../../shared/images/images.module';

import {ColorDirective} from '../../shared/directives/color.directive';
import {StyleDirective} from '../../shared/directives/style.directive';
import {DmitryComponent} from './dmitry.component';

@NgModule({
  declarations: [
    ColorDirective,
    StyleDirective,
    DmitryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DotModule,
    DmitryRoutingModule,
    ImagesModule
  ]
})
export class DmitryModule {
}
