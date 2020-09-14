import {EventEmitter, Injectable} from '@angular/core';
import {Card} from './card';

@Injectable()
export class CardProviderService {

  newCardEmitter = new EventEmitter<Card>();

  constructor() {
  }

  fetchCardsForState(state: string): Card[] {
    if (state === 'TO DO') {
      return [
        new Card('Card 1', 'this is my card 1', 'BDS', 'TO DO'),
        new Card('Card 2', 'this is my card 2', 'BDS', 'TO DO')
      ];
    } else if (state === 'IN PROGRESS') {
      return [new Card('Card 3', 'this is my card 3', 'BDS', 'IN PROGRESS')];
    } else {
      return [new Card('Card 4', 'this is my card 4', 'BDS', 'DONE')];

    }
  }

  addCard(card: Card) {
    console.log('new card to be pushed to backend: ' + card);
    this.newCardEmitter.emit(card);
  }
}
