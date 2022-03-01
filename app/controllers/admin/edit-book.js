import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import window from 'ember-window-mock';

export default class AdminEditBookController extends Controller {
  @service router;
  @service store;
  @tracked book = this.model;

  @action
  editPost() {
    if (window.confirm('Are you sure you want to edit this post?')) {
      this.store.findRecord('book', this.book.id).then(function (book) {
        book.set('bookName', this.book.bookName);
        book.set('price', this.book.price);
        book.set('author', this.book.author);
        book.set('publisher', this.book.publisher);
        book.set('releaseDate', this.book.releaseDate);
        book.set('width', this.book.width);
        book.set('height', this.book.height);
        book.set('language', this.book.language);
        book.set('pages', this.book.pages);
        book.set('about', this.book.about);
        book.save();
      });
      alert('Edited successfully');
      this.router.transitionTo('admin.getBookById', this.book.id);
    }
  }
}
