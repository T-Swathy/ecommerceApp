import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | user/viewBookById', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:user/view-book-by-id');
    assert.ok(route);
  });
});
