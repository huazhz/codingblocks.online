import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    "use strict";
    return this.modelFor('courses')
  }
});
