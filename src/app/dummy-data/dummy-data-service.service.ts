import { Injectable } from '@angular/core';
import {Card} from "../card/Card";

export interface ICardService {
  cards:Array<any>;
}

@Injectable()
export class CardService implements ICardService{
  cards: any[];
}

@Injectable()
export class DummyCardService implements ICardService{
  cards:Array<Card>;
  private defaultImage = "assets/water_monster.jpg";

  constructor() {
    this.cards = [
      new Card({
        cost: 1, name:"HardCoded",
        description:"A Hard core hard coded card",
        imageAppRelativeUrl: this.defaultImage
      }),
      new Card({
        cost: 7,
        name:"Another Card",
        description:"Not hardcore. Still hard coded though.",
        imageAppRelativeUrl: this.defaultImage
      }),
      new Card({
        cost: 3,
        name: "Yetr",
        description: "Yetr's are not real. Grow up.",
        imageAppRelativeUrl: this.defaultImage
      }),
      new Card({
        cost: 3,
        name: "Crotam",
        description: "Crotams are real. Grow up.",
        imageAppRelativeUrl: this.defaultImage
      })
    ]
  }
}
