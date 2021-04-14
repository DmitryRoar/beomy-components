import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UiKitPageRoutingModule} from './ui-kit-page-routing.module';
import {UiKitPageComponent} from './ui-kit-page.component';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    UiKitPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UiKitPageRoutingModule,
  ]
})
export class UiKitPageModule {
}
