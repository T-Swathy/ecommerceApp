import Controller from '@ember/controller';
import { action } from '@ember/object';
import window from 'ember-window-mock';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import MutableArray from '@ember/array/mutable';
import { get } from '@ember/object';

export default class AdminGetBooksController extends Controller {
  @service store;
  @tracked selectedBooks = [];

  @action
  getSelectedBooks(book) {
    if (!book.isChecked) {
      this.selectedBooks.addObject(book.id);
    } else {
      this.selectedBooks.removeObject(book.id);
    }
  }

  @action
  deleteSelectedBooks() {
    if (window.confirm('Are you sure about deleting this book?')) {
     
      this.selectedBooks.forEach(element => {
        this.book = this.store.peekRecord('book', element);
        this.book.destroyRecord();
      });
      this.selectedBooks.clear();
      alert('Records deleted');
    }
  }
}
