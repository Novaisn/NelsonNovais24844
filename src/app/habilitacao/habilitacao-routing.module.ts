import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilitacaoPage } from './habilitacao.page';

const routes: Routes = [
  {
    path: '',
    component: HabilitacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilitacaoPageRoutingModule {}
