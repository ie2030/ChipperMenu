import { Item } from '../Item/item';

export class SpecialItem {
    _id?: string;
    day: string;
    price: number;
    items_name: string;
    items: Item[];
    ad_hoc_price: number;
}