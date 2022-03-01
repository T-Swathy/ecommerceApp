import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserAuthService extends Service {
  @tracked loggedIn = true;
  isLoggedIn() {
    this.loggedIn = true;
  }
  isLoggedOut() {
    this.loggedIn = false;
  }
  isUserLoggedIn() {
    return this.loggedIn;
  }
}
