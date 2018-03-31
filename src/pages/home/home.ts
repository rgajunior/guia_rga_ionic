import { ItemDetailPage } from './../item-detail/item-detail';
import { ModalController } from 'ionic-angular';
import { ItemProvider } from './../../providers/item/item';
import { Item } from './../../model/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  ads: Item[] = [];
  events: Item[] = [];

  constructor(private itemProvider: ItemProvider, private modalCtrl: ModalController) {

  }

  ngOnInit(){
    this.ads = this.itemProvider.getAds('promocao');
    this.events = this.itemProvider.getAds('event');
    console.log(this.ads);
    
  }

  onAdClick(ad: Item){
    let modal = this.modalCtrl.create(ItemDetailPage, ad);
    modal.present();
  }
}
