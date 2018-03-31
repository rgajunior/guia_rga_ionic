import { Category } from './../../model/category';
import { ItemDetailPage } from './../item-detail/item-detail';
import { ItemProvider } from './../../providers/item/item';
import { Item } from './../../model/item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  searchInput: string;
  category: Category;
  items: Item[] = [];

  constructor(public viewCtrl: ViewController,
    public navParams: NavParams,
    private itemProvider: ItemProvider,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  onInput(event: any) {
    if (this.searchInput.trim().length == 0) {
      this.items = [];
      this.viewCtrl.dismiss();
    }
    else {
      this.items = this.itemProvider.search(this.searchInput);
    }
  }

  onItemClick(item: Item) {
    console.log(item);
    const modal = this.modalCtrl.create(ItemDetailPage, item);

    modal.present();
  }

  ionViewWillEnter() {
    this.searchInput = this.navParams.get("searchInput");
    this.category = this.navParams.get("category");

    if (this.searchInput)
      this.items = this.itemProvider.search(this.searchInput);
    else
      this.items = this.itemProvider.searchByCategory(this.category);
  }

  onCategoriesCliked(){
    this.viewCtrl.dismiss();
  }
}
