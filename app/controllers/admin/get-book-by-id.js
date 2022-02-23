import Controller from '@ember/controller';
import { action } from '@ember/object';
import window from 'ember-window-mock';
import { inject as service } from '@ember/service';

export default class AdminGetBookByIdController extends Controller {
  @service store;
  @action
  deleteBook(model) {
    if (window.confirm('Are you sure about deleting this book?')) {
      this.book = this.store.peekRecord('book', model.id);
      this.book.destroyRecord();
      this.transitionToRoute('admin.getBooks');
    }
  }
}
