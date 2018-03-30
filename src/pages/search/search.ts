import { Category } from './../../model/category';
import { ItemDetailPage } from './../item-detail/item-detail';
import { Item } from './../../model/item';
import { ItemProvider } from './../../providers/item/item';
import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements OnInit {
  searchInput: string;
  items: Item[] = [];
  categories: Category[] = [];

  constructor(private itemProvider: ItemProvider, private modalCtrl: ModalController) {
  }

  onInput(event: any) {
    if (this.searchInput.trim().length == 0)
      this.items = [];
    else {
      this.items = this.itemProvider.search(this.searchInput);
    }
  }

  onItemClick(item: Item) {
    console.log(item);
    const modal = this.modalCtrl.create(ItemDetailPage, item);

    modal.present();
  }

  ngOnInit() {
    this.categories = this.itemProvider.getCategories();
    console.log(this.categories);
  }
}
