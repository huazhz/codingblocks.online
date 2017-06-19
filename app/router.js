import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('courses', function() {
    this.route('course', {path: 'c/:id'});
  });
  this.route('take', {path: 'take/:id'}, function() {
    this.route('content',{path: 'content/:id'});
  });
});

export default Router;
