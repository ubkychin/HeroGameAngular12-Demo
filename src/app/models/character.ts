import { Dice } from './dice';

export interface Character {
  name: string;
  picture: string;
  active: Boolean
}

export class Hero implements Character {
  name: string;
  picture: string;
  dice: Dice;
  maxUses: number;
  uses: number;
  active: Boolean;

  constructor(name:string, pic: string, dice: Dice, uses: number) {
    this.name = name;
    this.picture = pic;
    this.dice = dice;
    this.maxUses = uses
    this.uses = uses;
    this.active = true;
  }

  roll(): number {
    return this.dice.roll();
  }
}

export class Villain implements Character {
  name: string;
  picture: string;

  hitpoints: number;
  active: Boolean;

  constructor(name: string, pic: string, hitpoints: number) {
    this.name = name;
    this.picture = pic;
    this.hitpoints = hitpoints;
    this.active = true;
  }

  hit(amount: number): void {
    this.hitpoints -= amount;
    if(this.hitpoints <= 0) {
      this.hitpoints = 0;
      this.active = false;
    }
  }
}