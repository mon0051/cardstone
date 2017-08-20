import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cost: number = 1;
  description: string = "This is the first card. Hardcoded. Hard core hardcoded.";
  name: string = "HardCode";

  constructor() { }

  ngOnInit() {
  }

}
