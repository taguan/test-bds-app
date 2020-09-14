import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../card';
import {CardProviderService} from '../card-provider.service';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.css']
})
export class BoardColumnComponent implements OnInit {

  cards: Card[];

  @Input()
  public title: string;
  @Input()
  public state: string;

  constructor(private cardProvider: CardProviderService) { }

  ngOnInit(): void {
    this.cards = this.cardProvider.fetchCardsForState(this.state);
    this.cardProvider.newCardEmitter.subscribe((newCard: Card) => {
      if (newCard.state === this.state) {
        this.cards.push(newCard);
      }
    });
  }

}
