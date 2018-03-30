import { Category } from './../../model/category';
import { HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import items from '../../mock/item/items';
import categories from '../../mock/category/categories';

@Injectable()
export class ItemProvider implements OnInit {
  private items: Item[] = items;
  private favorites: Item[] = [];
  private categories: Category[] = categories;

  constructor(public http: HttpClientModule) {
    console.log('Hello ItemProvider Provider');
  }

  ngOnInit() {

  }

  search(pattern: string) {
    console.log(items);

    let ret = items.filter((item: Item) => {
      return item.name.toLowerCase().indexOf(pattern.toLowerCase()) >= 0;
    });

    console.log(ret);

    return ret;
  }

  addToFavorites(item: Item) {
    console.log(item);

    console.log(this.favorites.findIndex(x => x.id === item.id));

    if (this.favorites.findIndex(x => x.id === item.id) === -1)
      this.favorites.push(item);

    console.log(this.favorites);

  }

  getFavorites() {
    console.log(this.favorites);

    return this.favorites.slice(0);
  }

  getCategories(){
    return this.categories.slice(0);
  }
}
