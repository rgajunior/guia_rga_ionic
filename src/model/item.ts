import { Category } from './category';
export class Item {
    id: string;
    type: string;
    name: string;
    subtext: string;
    address: string;
    phoneList: string[];
    favorite: boolean;
    category: Category;
    text: string;
    homeImageUrl: string;
    detailImageUrl: string;
    logoImageUrl: string;
    websiteUrl: string;

    constructor() { }
}

