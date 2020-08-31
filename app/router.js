import EmberRouter from '@ember/routing/router';
import config from 'todos/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('todo', { path: `/todo/:todo_id` });
});
