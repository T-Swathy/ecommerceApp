import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class UserViewBookByIdController extends Controller {
  @service shoppingCart;

  @action
  addToCart(model) {
    this.shoppingCart.addItem({
      bookName: model.bookName,
      price: model.price,
    });
  }
}
