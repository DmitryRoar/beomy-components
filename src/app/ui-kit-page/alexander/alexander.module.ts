import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlexanderRoutingModule} from './alexander-routing.module';

import {MatSliderModule} from '@angular/material/slider';

import {NgSelectModule} from '@ng-select/ng-select';
import {UploadModule} from '../../shared/upload/upload.module';
import {ChatsModule} from '../../shared/chats/chats.module';
import {FormControlsModule} from '../../shared/form-controls/form-controls.module';
import {ImagesModule} from '../../shared/images/images.module';
import {CalendarModule} from '../../shared/calendar/calendar.module';

import {AlexanderComponent} from './alexander.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AlexanderComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    NgSelectModule,
    UploadModule,
    ChatsModule,
    FormControlsModule,
    ImagesModule,
    CalendarModule,
    AlexanderRoutingModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class AlexanderModule {
}
