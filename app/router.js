import EmberRouter from '@ember/routing/router';
import config from 'book-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('logIn');

  this.route('admin', function () {
    this.route('addBook');
    this.route('getBooks');

    this.route('getBookById', { path: '/book/:id' });
    this.route('editBook', { path: '/editBook/:id' });
  });

  this.route('user', function () {
    this.route('homePage');
  });
});
