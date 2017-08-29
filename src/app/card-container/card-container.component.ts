import { Component, OnInit } from '@angular/core';
import {Card} from "../card/Card";
import {CardService} from "../dummy-data/dummy-data-service.service";

declare let window;

@Component({
  selector:    'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls:  ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  myCards: Array<Card> = [];

  constructor(dataService:CardService) {
    this.myCards = dataService.cards.map((c) => c);
  }

  ngOnInit() {
  }
}
