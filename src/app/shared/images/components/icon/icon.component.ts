import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SizesIcon} from './sizes-icon.enum';

@Component({
  selector: 'gen-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {

  @Input() name!: string;
  @Input() size!: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';

  constructor() {
  }

  getSize(): number {
    if (this.size) {
      return SizesIcon[this.size];
    }
    return SizesIcon.m;
  }

}
