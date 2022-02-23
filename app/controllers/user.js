import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class UserController extends Controller {
  @service shoppingCart;
  get itemCount() {
    return this.shoppingCart.itemList.reduce((total, item) => {
      return (total += parseInt(item.count));
    }, 0);
  }
}
