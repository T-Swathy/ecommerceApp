import Controller, { inject as controller } from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LogInController extends Controller {
  @service router;
  @service userAuth;
  @tracked userName;
  @tracked password;
  @action
  updateUserName(event) {
    this.userName = event.target.value;
  }
  @action
  updatePassword(event) {
    this.password = event.target.value;
  }
  @action
  userLogIn() {
    console.log(typeof this.password);
    if (
      typeof this.userName != 'undefined' &&
      typeof this.password != 'undefined'
    ) {
      if (this.userName == 'admin' && this.password == 'admin') {
        this.router.transitionTo('admin.getBooks');
        this.userAuth.isLoggedIn();
        this.userName = undefined;
      } else {
        this.router.transitionTo('user.viewBooks');
        this.userAuth.isLoggedIn();
        this.password = undefined;
      }
    } else alert('Please enter username and password');
  }
}
