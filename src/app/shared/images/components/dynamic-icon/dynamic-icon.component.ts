import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input} from '@angular/core';


@Component({
  selector: 'air-dynamic-icon',
  template: `
    <svg pointer-events="all" [class.mode-fill]="isFillMode" [class.mode-stroke]="isStrokeMode">
      <use pointer-events="all" [attr.xlink:href]="src"></use>
    </svg>
  `,
  styleUrls: ['./dynamic-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['color', 'size']
})
export class DynamicIconComponent {
  @Input() name = '';
  @Input() sprite = 'sprite';

  @Input() colorMode: 'fill' | 'stroke' | 'all' = 'fill';

  get isFillMode(): boolean {
    return this.colorMode === 'fill' || this.colorMode === 'all';
  }

  @HostBinding('class.mode-stroke')
  get isStrokeMode(): boolean {
    return this.colorMode === 'stroke' || this.colorMode === 'all';
  }


  get src(): string {
    return `/assets/sprites/${this.sprite}.svg#${this.name}`;
  }

  constructor(private elementRef: ElementRef) {
  }
}
