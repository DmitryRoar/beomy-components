import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UiKitPageComponent} from './ui-kit-page.component';

const routes: Routes = [
  {
    path: '',
    component: UiKitPageComponent,
    children: [
      {path: '', redirectTo: '', pathMatch: 'full'},
      {
        path: 'alexander',
        loadChildren: () => import('./alexander/alexander.module').then(m => m.AlexanderModule)
      },
      {
        path: 'dmitry',
        loadChildren: () => import('./dmitry/dmitry.module').then(m => m.DmitryModule)
      },
      {
        path: 'lado',
        loadChildren: () =>
          import('./lado/lado.module').then((m) => m.LadoModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiKitPageRoutingModule {
}
