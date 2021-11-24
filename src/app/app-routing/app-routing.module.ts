import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamePageComponent } from '../components/game-page/game-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/gamePage', pathMatch: 'full' },
  {
    path: 'gamePage',
    loadChildren: () =>
      import('../components/game-page/game-page.module').then(m => m.GamePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
