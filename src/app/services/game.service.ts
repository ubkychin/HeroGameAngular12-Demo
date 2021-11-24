import { Injectable } from '@angular/core';
import { Game } from '../models/game';

@Injectable( {
  providedIn: 'root',
})
export class GameService {

  game: Game;

  constructor() { }

  createGame(mode:string): Game {
    this.game = new Game(mode);
    console.log("Game created: ", this.game);
    return this.game;
  }

  getGame(): Game {
    return this.game;
  }

}