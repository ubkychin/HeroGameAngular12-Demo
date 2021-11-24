export class Dice {
  maxSide: number;
  minSide: number;

  constructor(maxSide: number, minSide?: number) {
    if(minSide && maxSide) {
      this.maxSide = maxSide;
      this.minSide = minSide;
    } else {
      this.maxSide = maxSide;
      this.minSide = 0;
    }
  }

  roll(): number {
    //The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (this.maxSide - this.minSide +1)+ this.minSide); 
  }
}