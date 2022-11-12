import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassatemposPage } from './passatempos.page';

const routes: Routes = [
  {
    path: '',
    component: PassatemposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassatemposPageRoutingModule {}
