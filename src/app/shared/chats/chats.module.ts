import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatComponent} from './components/chat/chat.component';
import {ImagesModule} from '../images/images.module';



@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ImagesModule
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatsModule { }
