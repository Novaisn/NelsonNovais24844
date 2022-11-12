import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabilitacaoPageRoutingModule } from './habilitacao-routing.module';

import { HabilitacaoPage } from './habilitacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabilitacaoPageRoutingModule
  ],
  declarations: [HabilitacaoPage]
})
export class HabilitacaoPageModule {}
