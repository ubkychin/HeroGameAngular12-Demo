import { Hero, Villain } from "./character";
import { Dice } from "./dice";

export class Game {
  rounds: Round[] = [];
  heroes: Hero[];
  mode: string;
  heroPointsPool: number

  constructor(mode?:string, pointsPool?:number) {
    this.rounds = [];
    this.mode = mode;
    if(mode !== undefined) {
      if(mode == "debug") {
        this.heroes = [new Hero("Captain Swinburne", "", new Dice(6), 2), new Hero("Ms Hawthorn", "", new Dice(8), 2), new Hero("Rick", "", new Dice(10), 2)];
      }
    }
    
    if(!pointsPool) {
      this.heroPointsPool = 30;
    } else {
      this.heroPointsPool = pointsPool;
    }
  }

  createRound(): void {
    if(this.mode == "debug") {
      this.createRoundDebug();
    }
  }

  createRoundDebug(): void {
    let newRound: Round = new Round();
    newRound.roundNo = this.rounds.length + 1;
    newRound.villains = [];

    let names: string[] = ['Dr Evil', 'Mr Bad', 'Facebook'];

    for(let i = 0; i < newRound.roundNo + 1; i++) {
      let name = names[Math.floor(Math.random() * names.length)];
      let hitpoints = Math.floor(Math.random() * 10) + 1;

      let newVillain: Villain = new Villain(name, "", hitpoints);
      
      newRound.villains.push(newVillain);
    }

    this.rounds.push(newRound);
  }

}

export class Round {
  roundNo: number;
  villains: Villain[];
}