export class Card{
  cost: number = 1;
  description: string = "This is the first card. Hardcoded. Hard core hardcoded.";
  name: string = "HardCode";
  imageAppRelativeUrl:string;
  constructor(cardInfo:any){
    this.cost = cardInfo.cost;
    this.description = cardInfo.description;
    this.name = cardInfo.name;
    this.imageAppRelativeUrl = cardInfo.imageAppRelativeUrl;
  }
}
