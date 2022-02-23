import Controller, { inject as controller } from '@ember/controller';
import { action } from '@ember/object';

export default class LogInController extends Controller {
  @action
  userLogIn(userName, password, event) {
    if (typeof userName !== 'undefined' && typeof password !== 'undefined') {
      if (userName == 'admin' && password == 'admin') {
        this.transitionToRoute('admin');
      } else {
        this.transitionToRoute('user.homePage');
        this.controllerFor('application').set('user', 'commonUser');
      }
    } else {
      alert('Please enter username and password');
    }
  }
}
