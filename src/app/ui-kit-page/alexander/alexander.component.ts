import { Component } from '@angular/core';
import {ChatItem} from 'src/app/shared/chats/components/chat/chat.interface';
import {ISelectItem} from 'src/app/shared/form-controls/components/select/select.interface';

@Component({
  selector: 'gen-ui-kit-alexander',
  templateUrl: './alexander.component.html',
  styleUrls: ['./alexander.component.scss']
})
export class AlexanderComponent {

  chat: ChatItem = {
    avatar: 'assets/img/chat/student-photo.png',
    count_new_messages: 1,
    sub_title: 'Any fitness trainer will tell you how critical it is for you to developdfdfdfdfdf',
    time_label: '15 min',
    title: 'Fleece Marigold',
  };
  notSettingSelect: ISelectItem[] = [
    {
      id: 1,
      text: '5 min'
    },
    {
      id: 2,
      text: '1hour'
    },
    {
      id: 3,
      text: '2hour'
    },
    {
      id: 1,
      text: '5 min'
    },
    {
      id: 2,
      text: '1hour'
    },
    {
      id: 3,
      text: '2hour'
    },
    {
      id: 1,
      text: '5 min'
    },
    {
      id: 2,
      text: '1hour'
    },
    {
      id: 3,
      text: '2hour'
    }
  ];
  notSettingSelectSelected = this.notSettingSelect[2];

  day = {date: new Date()};
  it: any = '';

  formatLabel(value: number): string | number {
    return value + ' km';
  }
}
