import { ItemProvider } from './../../providers/item/item';
import { Item } from './../../model/item';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';



@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage implements OnInit{
  item: Item;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private itemProvider: ItemProvider) {
    this.item = this.navParams.data;
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

  ngOnInit(){
    this.item = this.navParams.data;
  }

  onAddToFavorites(item: Item){
    this.itemProvider.addToFavorites(item);
  }
}
