import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class AdminAddBookController extends Controller {
  @service store;
  @action
  createBook(
    bookName,
    price,
    author,
    publisher,
    releaseDate,
    width,
    height,
    language,
    pages,
    about
  ) {
    let post = this.store.createRecord('book', {
      bookName: bookName,
      price: price,
      author: author,
      publisher: publisher,
      releaseDate: releaseDate,
      width: width,
      height: height,
      language: language,
      pages: pages,
      about: about,
    });
    post.save();
    alert('new Book added');
    this.transitionToRoute('admin.getBooks');
  }
}
