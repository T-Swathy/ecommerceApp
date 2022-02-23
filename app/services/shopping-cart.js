import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;
  bookName;
  price;
  constructor(item) {
    this.count = item.count;
    this.bookName = item.bookName;
    this.price = item.price;
  }
}

export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    const existingItem = this.itemList.find(({ bookName, price }) => {
      return bookName === item.bookName && price === item.price;
    });
    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.itemList = [...this.itemList, new Item({ ...item, count: 1 })];
    }
  }
  removeItem(item) {
    this.itemList.removeObject(item);
  }
}
