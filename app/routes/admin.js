import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminRoute extends Route {
  @service router;
  @service userAuth;
  beforeModel() {
    if (!this.userAuth.isUserLoggedIn()) {
      alert('Please log in to continue');
      this.router.transitionTo('logIn');
    }
  }
}
