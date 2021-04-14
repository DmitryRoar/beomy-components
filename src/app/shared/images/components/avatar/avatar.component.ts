import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SizesAvatar} from './sizes-avatar.enum';

@Component({
  selector: 'gen-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {

  @Input() src: string | undefined;
  @Input() size: 'xxl' | 'xl' | 'l' | 'm' | undefined;

  constructor() {
  }

  getSize(): number {
    if (this.size) {
      return SizesAvatar[this.size];
    }
    return SizesAvatar.m;
  }

}
