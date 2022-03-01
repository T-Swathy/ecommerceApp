import Controller, { inject as controller } from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LogInController extends Controller {
  @service router;
  @service userAuth;
  @tracked userName = '';
  @tracked password = '';
  @tracked isAdmin;


  userProfile()
  {
    if(this.userName=='admin' && this.password == 'admin')
    this.isAdmin=true;
    else
    this.isAdmin=false;

  }

  @action
  userLogIn() {
    if (this.userName != '' && this.password != '') {
      this.userProfile();
      if (this.isAdmin) {
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
