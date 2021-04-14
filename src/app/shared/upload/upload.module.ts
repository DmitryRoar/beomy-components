import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

import {ImagesModule} from '../images/images.module';

import {UploadImageComponent} from './components/upload-image/upload-image.component';

@NgModule({
  declarations: [
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    ImagesModule,
    MatGridListModule,
    MatButtonModule,
  ],
  exports: [
    UploadImageComponent
  ],
})
export class UploadModule {
}
