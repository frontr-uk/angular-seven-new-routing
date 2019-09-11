import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosListComponent } from './heros/containers/heros-list/heros-list.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('../../projects/ban-user/src/lib/ban-user.module').then(mod => mod.BanUserModule)
  },
  {
    path: 'heros',
    component: HerosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
