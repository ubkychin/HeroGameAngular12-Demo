import { Component, ElementRef, Input, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Hero, Villain } from '../../models/character';
import { Dice } from '../../models/dice';
import { Game, Round } from '../../models/game';
import { HeroViewComponent } from '../hero-view/hero-view.component';
import { HeroComponent } from '../hero/hero.component';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.css']
})
export class BattlePageComponent implements OnInit {
  @ViewChild('newRoundBtn') newRoundBtn: ElementRef;
  @ViewChild('rollResult') rollResult: ElementRef;
  @Input() game: Game;
  @ViewChild(HeroViewComponent) heroView: HeroViewComponent;
  
  selectedHero: Hero;
  selectedHeroIndex: number;
  useHeroDisabled: Boolean;
  selectedHeroComponent: HeroComponent;
  rollValue: number;
  currentRound: Round;

  selectedVillain: Villain;

  constructor(private gameService: GameService) { 
    
    this.useHeroDisabled = true;
  }

  ngOnInit() {
    this.game = this.gameService.getGame();
    this.currentRound = null;
  }

  useHeroClick(): void {
    this.selectedHero.uses--;
    this.rollValue = this.selectedHero.dice.roll();

    this.rollResult.nativeElement.innerHTML = `${this.selectedHero.name} rolls ${this.rollValue}`;

    if(this.selectedHero.name.toLowerCase() == "rick") {
      window.open("https://shattereddisk.github.io/rickroll/rickroll.mp4", "_blank");
      this.rollResult.nativeElement.innerHTML = `RICKROLLED ${this.rollValue}`;
    }

    

    this.selectedVillain.hit(this.rollValue);
    
    this.useHeroDisabled = true;
    this.selectedHero = null;
    this.selectedVillain = null;

    if(this.checkWinCondition()) {
      alert("Heroes Win!");
      this.resetHeroUses();
      this.heroView.resetHeroDivs();
      this.newRoundBtn.nativeElement.disabled = false;
    } else if (this.checkLoseCondition()) {
      alert("Villains Win");
    }
    
  }

  selectedHeroChange(hero: Hero) {
    this.selectedHero = hero;
    this.enableUseHeroBtn();
    this.rollResult.nativeElement.innerHTML = '';
  }

  selectedVillainChange(villain: Villain) {
    this.selectedVillain = villain;
    this.enableUseHeroBtn();
  }

  enableUseHeroBtn(): void {
    if(this.selectedVillain && this.selectedHero) {
      this.useHeroDisabled = false;
    }
  }

  startRoundClickHandler(): void {
    this.game.createRound();
    this.currentRound = this.game.rounds[this.game.rounds.length-1];
    
    this.newRoundBtn.nativeElement.disabled = true; 

  }

  checkWinCondition(): Boolean {
    for(let v of this.currentRound.villains) {
      if(v.active) {
        return false;
      }
    }

    return true;
  }

  checkLoseCondition(): Boolean {
    for(let h of this.game.heroes) {
      if(h.uses > 0) {
        return false;
      }
    }

    return true;
  }

  resetHeroUses(): void {
    this.game.heroes.forEach(h => h.uses > 0 ? h.maxUses = h.maxUses + 1: h.uses = 0);
    this.game.heroes.forEach(h => h.uses = h.maxUses);
  }
}