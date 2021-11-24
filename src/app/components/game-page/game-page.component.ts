import { Component, OnInit } from '@angular/core';
import { Game, Round } from '../../models/game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  game: Game;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.game = this.gameService.createGame("debug");

  }

}