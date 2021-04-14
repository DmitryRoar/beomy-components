import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DmitryComponent} from './dmitry.component';

const routes: Routes = [
  {
    path: '', component: DmitryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmitryRoutingModule {
}
