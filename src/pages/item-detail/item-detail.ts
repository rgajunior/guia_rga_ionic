import { ItemProvider } from './../../providers/item/item';
import { Item } from './../../model/item';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage implements OnInit {
  item: Item;

  constructor(public viewCtrl: ViewController,
    public navParams: NavParams,
    private itemProvider: ItemProvider,
    private callNumber: CallNumber,
    private launchNavigator: LaunchNavigator,
    private socialSharing: SocialSharing) {
    this.item = this.navParams.data;
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

  ngOnInit() {
    this.item = this.navParams.data;
  }

  onAddToFavorites(item: Item) {
    this.itemProvider.addToFavorites(item);
  }

  removeFromFavorites(item: Item) {
    this.itemProvider.removeFromFavorites(item);
  }

  onPhoneClick(phoneNumber: string) {
    let n = phoneNumber.replace(/\D/g, "");

    this.callNumber.callNumber(n, false)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  onOpenNavigation(item: Item) {
    this.launchNavigator.navigate(item.address);
  }

  onShare(item: Item) {
    var options = {
      message: item.name + " - " + item.address + " - " + item.phoneList.join(", "), 
      url: 'https://www.guiarga.com/ad?id=' + item.id,
    }
    this.socialSharing.shareWithOptions(options);
  }

  onAddToContacts(item: Item){
    
  }
}
