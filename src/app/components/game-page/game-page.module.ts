import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroCreatorComponent} from '../hero-creator/hero-creator.component';
import { GamePageComponent } from './game-page.component';
import { BattlePageComponent } from '../battle-page/battle-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: GamePageComponent},
      { path: 'heroCreator', component: HeroCreatorComponent },
      { path: 'battlePage', component: BattlePageComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class GamePageModule { }