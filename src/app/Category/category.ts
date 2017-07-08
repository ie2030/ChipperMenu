import { Item } from '../Item/item';

export class Category {
    _id?: string;
    img_url: string;
    name: string;
    itemList: Item[];
}