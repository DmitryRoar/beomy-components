import {NgModule} from '@angular/core';

import {DotComponent} from './components/dot/dot.component';

@NgModule({
  declarations: [
    DotComponent
  ],
  exports: [
    DotComponent
  ]
})
export class DotModule {
}
