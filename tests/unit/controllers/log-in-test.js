import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | log-in', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:log-in');
    assert.ok(controller);
  });
});
