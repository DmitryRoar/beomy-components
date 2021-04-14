import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent} from './components/avatar/avatar.component';
import {IconComponent} from './components/icon/icon.component';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {IconRegistryModule} from './components/icon-registry/icon-registry.module';
import {DynamicIconComponent} from './components/dynamic-icon/dynamic-icon.component';


@NgModule({
  declarations: [
    AvatarComponent,
    IconComponent,
    DynamicIconComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    IconRegistryModule
  ],
  exports: [
    HttpClientModule,
    AvatarComponent,
    IconComponent,
    IconRegistryModule,
    DynamicIconComponent
  ]
})
export class ImagesModule {
}
