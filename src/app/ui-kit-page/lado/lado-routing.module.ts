import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LadoComponent } from './lado.component';

const routes: Routes = [
  {
    path: '',
    component: LadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LadoRoutingModule {}
