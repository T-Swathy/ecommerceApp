import Controller, { inject as controller } from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LogInController extends Controller {
  @service router;
  @service userAuth;
  @tracked userName = '';
  @tracked password = '';

  @action
  userLogIn() {
    if (this.userName != '' && this.password != '') {
      if (this.userName == 'admin' && this.password == 'admin') {
        this.router.transitionTo('admin.getBooks');
        this.userAuth.isLoggedIn();
        this.userName = '';
        this.password = '';
      } else {
        this.router.transitionTo('user.viewBooks');
        this.userAuth.isLoggedIn();
        this.userName = '';
        this.password = '';
      }
    } else alert('Please enter username and password');
  }
}
