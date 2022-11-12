import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassatemposPageRoutingModule } from './passatempos-routing.module';

import { PassatemposPage } from './passatempos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassatemposPageRoutingModule
  ],
  declarations: [PassatemposPage]
})
export class PassatemposPageModule {}
