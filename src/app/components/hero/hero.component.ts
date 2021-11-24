import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../../models/character';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  @Input() hero: Hero;
  // @ViewChild('heroDiv') heroDiv;
  // selected: Boolean = false;
  // disabled: Boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  // setDisabled(): void {
  //   console.log(this.heroDiv);
  // }
}