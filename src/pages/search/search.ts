import { ResultPage } from './../result/result';
import { Category } from './../../model/category';
import { ItemProvider } from './../../providers/item/item';
import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements OnInit {
  searchInput: string;
  categories: Category[] = [];

  constructor(private itemProvider: ItemProvider, private modalCtrl: ModalController) {
  }

  onInput(event: any) {
    // if (this.searchInput.trim().length >= 1) {
    //   let modal = this.modalCtrl.create(ResultPage, { searchInput: this.searchInput });

    //   modal.present();
    //   modal.onWillDismiss(() => {
    //     this.searchInput = '';
    //   });
    // }
  }

  ngOnInit() {
    this.categories = this.itemProvider.getCategories();
  }

  onSelectCategory(category: Category) {
    let modal = this.modalCtrl.create(ResultPage, { category: category });

    modal.present();
  }

  onSearch(event: any) {
    if (this.searchInput.trim().length >= 1) {
      let modal = this.modalCtrl.create(ResultPage, { searchInput: this.searchInput });

      modal.present();
      modal.onWillDismiss(() => {
        this.searchInput = '';
      });
    }
  }
}
