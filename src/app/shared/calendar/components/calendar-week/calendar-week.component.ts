import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CalendarWeekDay} from './calendar-week-day.interface';

export const CALENDAR_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CalendarWeekComponent),
  multi: true,
};

@Component({
  selector: 'gen-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.scss'],
  providers: [CALENDAR_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarWeekComponent implements OnInit, ControlValueAccessor {

  @Input() selectedDay!: CalendarWeekDay;
  @Output() selectDayChange: EventEmitter<Date> = new EventEmitter<Date>();
  weekDate!: CalendarWeekDay[];

  disabled = false;

  get value(): CalendarWeekDay {
    return this.selectedDay;
  }

  set value(v: CalendarWeekDay) {
    if (!moment(v?.date).isSame(moment(this.selectedDay?.date))) {
      this.selectedDay = v;
      this.initDetectChanges();
    }
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.initWeek();
  }

  private onChange = (value: any) => {};
  private onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: CalendarWeekDay): void {
    this.value = outsideValue;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue(insideValue: CalendarWeekDay): void {
    this.value = insideValue;
    this.onChange(insideValue);
    this.onTouched();
  }

  private initWeek(): void {
    const currentDate = moment();
    const weekStart = currentDate.clone().startOf('week');
    const days: CalendarWeekDay[] = [];

    for (let index = 0; index <= 6; index++) {
      const date = moment(weekStart).add(index, 'days');
      days.push({
          id: index,
          value: date.format('D'),
          date: date.toDate(),
          name: date.format('ddd')
        }
      );
    }

    this.weekDate = days;
  }

  isSelected(day: CalendarWeekDay): boolean {
    if (this.selectedDay?.id && this.selectedDay.id >= 0) {
      return this.selectedDay?.id === day.id;
    }

    if (this.selectedDay?.date) {
      return moment(this.selectedDay.date).startOf('day').isSame(moment(day.date));
    }

    return false;
  }

  selectDayEvent(day: CalendarWeekDay): void {
    if (this.disabled) {
      return;
    }

    this.updateValue(day);
    this.selectDayChange.emit(this.selectedDay.date);
  }

  getNameDay(day: CalendarWeekDay): string | void {
    if (!day?.id && day.id !== 0) {
      return;
    }

    return this.weekDate[day.id].name;
  }

  initDetectChanges(): void {
    this.cdr.detectChanges();
  }
}
