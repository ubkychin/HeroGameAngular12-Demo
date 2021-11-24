import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  ViewChild,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { GameService } from '../../services/game.service';

import { Hero } from '../../models/character';
import { Game } from '../../models/game';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.component.html',
  styleUrls: ['./hero-view.component.css']
})

export class HeroViewComponent implements OnInit, OnChanges {
  @Input() game: Game;
  @Input() selectedHero: Hero;
  @Output() selectedHeroChange = new EventEmitter<Hero>();

  @ViewChild('heroDiv') heroDivRef: ElementRef;

  selectedHeroIndex: number;

  constructor(private gameService: GameService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'hero-view onchanges',
      changes.selectedHero.currentValue == null,
      changes
    );

    if (
      changes.selectedHero.previousValue &&
      !changes.selectedHero.currentValue
    ) {
      if (changes.selectedHero.previousValue.uses <= 0) {
        console.log('hero disabling', changes.selectedHero.previousValue);
        this.heroDivRef.nativeElement.children[
          this.selectedHeroIndex
        ].className = 'disabled';
      }

      this.clearSelectedHero();
    }
  }

  

  ngOnInit() {
    this.game = this.gameService.getGame();
    console.log(this.game, this.selectedHero);
  }

  heroClickHandler(event): void {
    this.clearSelectedHero();

    this.selectedHero = this.game.heroes[Number(event.currentTarget.id)];
    this.selectedHeroIndex = event.currentTarget.id;

    event.currentTarget.className = 'selected';
    this.selectedHeroChange.emit(this.selectedHero);
  }

  clearSelectedHero(): void {
    for (let child of this.heroDivRef.nativeElement.children) {
      if (child.className != 'disabled') {
        child.className = '';
      }
    }
  }

  resetHeroDivs(): void {
    for(let i=0; i < this.game.heroes.length; i++) {
      if(this.game.heroes[i].uses > 0) {
        this.heroDivRef.nativeElement.children[i].className = '';
      }
    }
  }
}
