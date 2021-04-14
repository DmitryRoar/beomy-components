import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LadoComponent} from './lado.component';
import {LadoRoutingModule} from './lado-routing.module';
import {RadioButtonModule} from '../../shared/radio-button/radio-button.module';
import {CardModule} from '../../shared/card/card.module';
import {DesignElementsModule} from '../../shared/design-elements/design-elements.module';

@NgModule({
  declarations: [LadoComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LadoRoutingModule,
    RadioButtonModule,
    CardModule,
    DesignElementsModule,
  ],
})
export class LadoModule {
}
