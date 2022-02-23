import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminGetBookByIdRoute extends Route {
  @service store;
  model(params) {
    let item = this.store.findRecord('book', params.id);
    return item;
  }
}
