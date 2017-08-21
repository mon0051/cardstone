import { Component, OnInit } from '@angular/core';
import {Card} from "../card/Card";
declare var cards;

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  cards:Array<Card>;

  loadCards(){
    cards.forEach((c) => {
      let nc = new Card();
      nc.name = c.name;
      nc.cost = c.cost;
      nc.description = c.description;

      this.cards[this.cards.length] = nc;
    })
  }

  constructor() {

    if(typeof cards !== "undefined"){
      this.loadCards();
    }


  }

  ngOnInit() {
  }


}
