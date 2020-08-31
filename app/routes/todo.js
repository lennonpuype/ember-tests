import Route from '@ember/routing/route';
import { todos } from './../data/todos';

export default class TodoRoute extends Route {
  model(params) {
    const { todo_id } = params;
    const todo = todos[todo_id];
    const model = { todo_id, todo }
    return model;
  }
}
