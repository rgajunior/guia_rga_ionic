import { Category } from './../../model/category';
import { HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import items from '../../mock/item/items';
import categories from '../../mock/category/categories';
import ads from '../../mock/ads/ads';

@Injectable()
export class ItemProvider implements OnInit {
  private items: Item[] = items;
  private favorites: Item[] = [];
  private categories: Category[] = categories;

  constructor(public http: HttpClientModule) {
  }

  ngOnInit() {

  }

  search(pattern: string) {
    let ret = items.filter(item => item.name.toLowerCase().indexOf(pattern.toLowerCase()) >= 0);

    return ret;
  }

  addToFavorites(item: Item) {
    item.favorite = true;
    if (this.favorites.findIndex(x => x.id === item.id) === -1)
      this.favorites.push(item);
  }

  getFavorites() {
    console.log(this.favorites);

    return this.favorites.slice(0);
  }

  getCategories() {
    return this.categories.slice(0);
  }

  getAds(type: string) {
    return this.items.filter(item => item.type === type);
  }

  removeFromFavorites(item: Item) {
    const i = this.favorites.findIndex(x => x.id === item.id);
    this.favorites.splice(i, 1);

    item.favorite = false;

    return this.favorites.slice(0);
  }

  searchByCategory(category: Category) {
    let ret = items.filter(item => item.category.icon == category.icon );

    return ret;
  }
}
