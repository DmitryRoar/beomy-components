import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList
} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ISelectItem} from './select.interface';
import {OptionComponent} from '../option/option.component';
import {randomId} from '../../../../helpers/random-id';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {SelectionDispatcherService} from '../../services/selection-dispatcher.service';

@Component({
  selector: 'gen-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('iconAnimation', [
      state('down', style({})),
      state('up', style({
        transform: 'rotateX(0deg)',
      })),
      transition('down <=> up', [
        animate('0.2s')
      ])
    ]),
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({height: 0, opacity: 0}),
            animate('0.5s ease-out',
              style({height: '*', opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({height: '*', opacity: 1}),
            animate('0.5s ease-in',
              style({height: 0, opacity: 0}))
          ]
        )
      ]
    )
  ]
})
@UntilDestroy()
export class SelectComponent implements AfterContentInit {
  @ContentChildren(OptionComponent) options?: QueryList<OptionComponent>;
  @Input() name = randomId('select');
  @Input() isDefinite = false;
  @Input() items: ISelectItem[] = [];
  @Input() selectedItem!: ISelectItem;
  @Output() selectedItemChange: EventEmitter<ISelectItem> = new EventEmitter<ISelectItem>();

  isOpenSelect = false;
  selectedItemContent?: string;

  constructor(private cdr: ChangeDetectorRef, private selectionDispatcherService: SelectionDispatcherService) {
  }

  ngAfterContentInit(): void {
    this.setOptionsName();
    this.options?.changes.pipe(untilDestroyed(this)).subscribe(() => this.setOptionsName());
    this.selectionDispatcherService.listen(this.name).pipe(untilDestroyed(this)).subscribe((id) => {
      const option = this.options?.find(o => o.id === id);
      this.selectedItemContent = option?.content;
      this.cdr.markForCheck();
    });
  }

  private setOptionsName(): void {
    this.options?.forEach(option => option.name = this.name);
  }

  selectClick(event: MouseEvent): void {
    event.stopPropagation();
    this.isOpenSelect = !this.isOpenSelect;
  }

  selectClose(event?: Event): void {
    event?.stopPropagation();
    this.isOpenSelect = false;
  }

  getSelectedItem(): ISelectItem {
    if (!this.selectedItem && this.items.length > 0) {
      this.selectedItem = this.items[0];
      this.selectedItemChange.emit(this.selectedItem);
    }

    return this.selectedItem;
  }

  initDetectChanges(): void {
    this.cdr.detectChanges();
  }

  optionClick(event: MouseEvent, selectedItem: ISelectItem): void {
    event.stopPropagation();
    this.selectedItem = selectedItem;
    this.selectedItemChange.emit(this.selectedItem);
    this.selectClose();
  }


}
