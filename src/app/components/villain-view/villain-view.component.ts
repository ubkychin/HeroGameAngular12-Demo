import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Villain } from '../../models/character';
import { Game, Round } from '../../models/game';

@Component({
  selector: 'app-villain-view',
  templateUrl: './villain-view.component.html',
  styleUrls: ['./villain-view.component.css']
})
export class VillainViewComponent implements OnInit, OnChanges {
  @Input() currentRound: Round;
  @Input() selectedVillain: Villain;
  @Output() selectedVillainChange: EventEmitter<Villain> = new EventEmitter<Villain>();

  selectedVillainIndex: number;

  @ViewChild('villainDiv') villainDivRef: ElementRef;

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.selectedVillain) {
      if(changes.selectedVillain.previousValue && !changes.selectedVillain.currentValue) {
        
        if(!changes.selectedVillain.previousValue.active) {
          this.villainDivRef.nativeElement.children[this.selectedVillainIndex].className = "disabled";
        }
        
        this.clearSelectedVillain();
      }
    }
  }

  ngOnInit() {
  }

  villainClickHandler(event): void {
    this.clearSelectedVillain();

    this.selectedVillain = this.currentRound.villains[Number(event.currentTarget.id)];
    this.selectedVillainIndex = event.currentTarget.id;

    event.currentTarget.className = "selected";
    this.selectedVillainChange.emit(this.selectedVillain);
    
  }

  clearSelectedVillain(): void {
    for(let child of this.villainDivRef.nativeElement.children) {
      if(child.className != "disabled") {
        child.className = "";
      }
    }
  }

}