import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card" [ngClass]="{ 'face-down': !isFaceUp }">
      {{ value }} {{ suit }}
    </div>
  `,
  styles: [
    `
      .card {
        width: 50px;
        height: 80px;
        border: 1px solid black;
      }
      .face-down {
        background-color: blue;
      }
    `,
  ],
})
export class CardComponent {
  @Input() value: string = "";
  @Input() suit: string = "";
  @Input() isFaceUp: boolean = false;
}
