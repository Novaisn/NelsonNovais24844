import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'sobremim',
    loadChildren: () => import('./sobremim/sobremim.module').then( m => m.SobremimPageModule)
  },
  {
    path: 'habilitacao',
    loadChildren: () => import('./habilitacao/habilitacao.module').then( m => m.HabilitacaoPageModule)
  },
  {
    path: 'passatempos',
    loadChildren: () => import('./passatempos/passatempos.module').then( m => m.PassatemposPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
