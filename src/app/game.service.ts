import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  deck: {suit: string, value: string}[] = [];
  stacks: {suit: string, value: string}[][] = Array.from({length: 7}, () => []);
  foundation: {suit: string, value: string}[][] = Array.from({length: 4}, () => []);
  hand: {suit: string, value: string}[] = [];

  constructor() {
    this.newGame();
  }

  newGame() {
    this.deck = [];
    for(let suit of this.suits) {
      for(let value of this.values) {
        this.deck.push({suit: suit, value: value});
      }
    }
    this.deck.sort(() => Math.random() - 0.5);
    for(let i = 0; i < 7; i++) {
      for(let j = 0; j <= i; j++) {
        let card = this.deck.pop();
        if (card) { // check if card is not undefined
            this.stacks[i].push(card);
        }
      }
    }
  }
}
