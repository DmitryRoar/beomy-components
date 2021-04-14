import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AlexanderComponent} from './alexander.component';

const routes: Routes = [
  {
    path: '', component: AlexanderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlexanderRoutingModule {
}
