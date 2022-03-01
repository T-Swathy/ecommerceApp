import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class AdminAddBookController extends Controller {
  @service router;
  @service store;
  @tracked bookName;
  @tracked price;
  @tracked author;
  @tracked publisher;
  @tracked releaseDate;
  @tracked width;
  @tracked height;
  @tracked language;
  @tracked pages;
  @tracked about;
  

  @action
  createBook() {
    let post = this.store.createRecord('book', {
      bookName: this.bookName,
      price: this.price,
      author: this.author,
      publisher: this.publisher,
      releaseDate: this.releaseDate,
      width: this.width,
      height: this.height,
      language: this.language,
      pages: this.pages,
      about: this.about,
    });
    post.save();
    alert('New Book added');
    this.bookName = '';
    this.price = '';
    this.author = '';
    this.publisher = '';
    this.releaseDate = '';
    this.width = '';
    this.height = '';
    this.language = '';
    this.pages = '';
    this.about = '';
    this.router.transitionTo('admin.getBooks');
  }
}
