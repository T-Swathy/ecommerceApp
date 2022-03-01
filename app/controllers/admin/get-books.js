import Controller from '@ember/controller';
import { action } from '@ember/object';
import window from 'ember-window-mock';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AdminGetBooksController extends Controller {
  @service store;
  @action
  deleteSelectedBooks() {

    let selectedBooks=this.model.filterBy('isChecked',true);
    if (window.confirm('Are you sure about deleting this book?')) {
      selectedBooks.forEach((element) => {
          let book;
          book = this.store.peekRecord('book', element.id);
          book.destroyRecord();
      });
      alert('Records deleted');
    }
  }
}
