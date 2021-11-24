import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../models/character';
import { Dice } from '../../models/dice';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-hero-creator',
  templateUrl: './hero-creator.component.html',
  styleUrls: ['./hero-creator.component.css']
})

export class HeroCreatorComponent implements OnInit {
  @Input() game: Game;
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('minDiceInput') minDiceInput: ElementRef;
  @ViewChild('maxDiceInput') maxDiceInput: ElementRef;
  @ViewChild('usesInput') usesInput: ElementRef;
  @ViewChild('startGameBtn') startGameBtn: ElementRef;

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.game = this.gameService.getGame();
    if(!this.game) {
      this.router.navigateByUrl('/gamePage');
    }
    console.log("Game Retrieved: ", this.game);
  }

  createBtnClickHandler() {
    let name: string = this.nameInput.nativeElement.value;
    let minDice: number = Number(this.minDiceInput.nativeElement.value);
    let maxDice: number = Number(this.maxDiceInput.nativeElement.value);
    let uses: number = Number(this.usesInput.nativeElement.value);


    let newHero: Hero = new Hero(name, "", new Dice(maxDice, minDice), uses);
    console.log((minDice + maxDice + 2*uses));
    if(this.game.heroPointsPool - (minDice + maxDice + 2*uses) >= 0) {
      
      this.game.heroPointsPool -= (minDice + maxDice + 2*uses);
      this.game.heroes.push(newHero);
    } else {
      alert("Not enough Hero points");
    }
    console.log(this.game);
  }

  startGameBtnClickHandler(): void {
    this.router.navigateByUrl('/gamePage/battlePage');
  }

}