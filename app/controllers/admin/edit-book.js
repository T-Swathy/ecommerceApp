import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import window from 'ember-window-mock';

export default class AdminEditBookController extends Controller {
  @service router;
  @service store;

  @action
  editPost(model) {
    if (window.confirm('Are you sure you want to edit this post?')) {
      this.store.findRecord('book', model.id).then(function (book) {
        book.set('bookName', model.bookName);
        book.set('price', model.price);
        book.set('author', model.author);
        book.set('publisher', model.publisher);
        book.set('releaseDate', model.releaseDate);
        book.set('width', model.width);
        book.set('height', model.height);
        book.set('language', model.language);
        book.set('pages', model.pages);
        book.set('about', model.about);
        book.save();
      });
      alert('Edited successfully');
      this.router.transitionTo('admin.getBookById', model.id);
    }
  }
}
