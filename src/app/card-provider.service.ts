import {EventEmitter, Injectable} from '@angular/core';
import {Card} from './model/card';
import {ApiService} from './api/api.service';
import {Observable} from 'rxjs';

@Injectable()
export class CardProviderService {

  newCardEmitter = new EventEmitter<Card>();

  constructor(private apiService: ApiService) {
  }

  fetchCards(): Observable<Card[]> {
    return this.apiService.getCards();
  }

  addCard(card: Card): Observable<Card> {
    card.id = 0;
    this.newCardEmitter.emit(card); // THIS IS WRONG
    return this.apiService.createCard(card);
  }
}
