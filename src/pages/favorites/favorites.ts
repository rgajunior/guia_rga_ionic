import { ItemDetailPage } from './../item-detail/item-detail';
import { Item } from './../../model/item';
import { ItemProvider } from './../../providers/item/item';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favorites: Item[] = [];

  constructor(private modalCtrl: ModalController, private itemProvider: ItemProvider) {
  }

  ionViewWillEnter() {
    this.favorites = this.itemProvider.getFavorites();
  }

  onItemClick(item: Item) {
    console.log(item);
    const modal = this.modalCtrl.create(ItemDetailPage, item);

    modal.present();

    modal.onWillDismiss(() => {
      this.favorites = this.itemProvider.getFavorites();
    });
  }

}
