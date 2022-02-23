import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UserCartController extends Controller {
  @service shoppingCart;

  get subTotal() {
    return this.shoppingCart.itemList.reduce((acc, item) => {
      return acc + parseInt(item.price) * parseInt(item.count);
    }, 0);
  }
  get tax() {
    return 0.09 * parseInt(this.subTotal);
  }
  get total() {
    return parseInt(this.tax) + parseInt(this.subTotal);
  }
  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    if (count >= 0) {
      item.count = parseInt(count);
    } else {
      item.count = 0;
    }
  }
  @action
  removeItem(item) {
    this.shoppingCart.removeItem(item);
    console.log(item);
  }
}
