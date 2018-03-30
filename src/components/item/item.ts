import { Item } from './../../model/item';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: 'item.html'
})
export class ItemComponent {
  @Input() public item: Item;

  text: string;

  constructor() {
    console.log('Hello ItemComponent Component');
    this.text = 'Hello World';
  }

}
