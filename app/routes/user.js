import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserRoute extends Route {
  @service router;
  @service userAuth;
  beforeModel(transition) {
    if (this.userAuth.loggedIn===false) {
        console.log(this.userAuth.loggedIn);
      alert('Please log in to continue');
      this.router.transitionTo('logIn');
    }
  }
}
