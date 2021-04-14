import {Component, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {SelectionDispatcherService} from '../../services/selection-dispatcher.service';
import {randomId} from '../../../../helpers/random-id';

@Component({
  selector: 'gen-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Input() value: any;
  @Input() name!: string;
  @Input() id = randomId('option');

  get content(): string {
    return this.elementRef.nativeElement.innerText;
  }

  @HostListener('click')
  onClick(): void {
    this.selectionDispatcher.notify({id: this.id, name: this.name});
  }

  constructor(private elementRef: ElementRef<HTMLDivElement>, private selectionDispatcher: SelectionDispatcherService) {

  }

  ngOnInit(): void {
  }

}
