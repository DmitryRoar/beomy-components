import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ChatItem} from './chat.interface';

@Component({
    selector: 'gen-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit {

    @Input() chat!: ChatItem;


    constructor() {
    }

    ngOnInit(): void {
    }
}
