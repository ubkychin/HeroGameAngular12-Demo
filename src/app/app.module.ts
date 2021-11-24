// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BattlePageComponent } from './components/battle-page/battle-page.component';
import { HeroComponent } from './components/hero/hero.component'
import { GamePageComponent } from './components/game-page/game-page.component';
import { VillainComponent } from './components/villain/villain.component';
import { HeroViewComponent } from './components/hero-view/hero-view.component';
import { VillainViewComponent} from './components/villain-view/villain-view.component';
import { HeroCreatorComponent} from './components/hero-creator/hero-creator.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent,
                  BattlePageComponent,
                  HeroComponent,
                  GamePageComponent,
                  VillainComponent,
                  HeroViewComponent,
                  VillainViewComponent,
                  HeroCreatorComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
