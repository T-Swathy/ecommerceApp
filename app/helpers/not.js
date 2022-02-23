import { helper } from '@ember/component/helper';

export default helper(function not([val] /*, named*/) {
   return !val;
});
