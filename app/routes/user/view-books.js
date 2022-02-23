import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserViewBooksRoute extends Route {
  @service store;
  model() {
    let bookList = this.store.findAll('book');
    return bookList;
  }
}
