import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardService, DummyCardService } from "./dummy-data/dummy-data-service.service";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DummyCardService,
    {provide: CardService, useExisting: DummyCardService}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
