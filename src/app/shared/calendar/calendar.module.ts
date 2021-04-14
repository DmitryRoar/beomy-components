import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CalendarWeekComponent} from './components/calendar-week/calendar-week.component';

@NgModule({
  declarations: [
    CalendarWeekComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    CalendarWeekComponent
  ]
})
export class CalendarModule {
}
