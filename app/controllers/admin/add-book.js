import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class AdminAddBookController extends Controller {
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
  updateName(event) {
    this.bookName = event.target.value;
  }
  @action
  updatePrice(event) {
    this.price = event.target.value;
  }
  @action
  updateAuthor(event) {
    this.author = event.target.value;
  }
  @action
  updatePublisher(event) {
    this.publisher = event.target.value;
  }
  @action
  updateReleaseDate(event) {
    this.releaseDate = event.target.value;
  }
  @action
  updateWidth(event) {
    this.width = event.target.value;
  }
  @action
  updateHeight(event) {
    this.height = event.target.value;
  }
  @action
  updateLanguage(event) {
    this.language = event.target.value;
  }
  @action
  updatePages(event) {
    this.pages = event.target.value;
  }
  @action
  updateAbout(event) {
    this.about = event.target.value;
  }

  @action
  createBook() {
    console.log(this.name);
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
    alert('new Book added');
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
    this.transitionToRoute('admin.getBooks');
  }
}
