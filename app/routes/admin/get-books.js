import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminGetBooksRoute extends Route {
  @service store;
  model() {
    let bookList = this.store.findAll('book');
    bookList.setEach('isChecked',true);
    return bookList;
  }
}
