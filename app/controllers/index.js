import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { addTodo, todos } from './../data/todos';
import { isWhitespace } from './../classes/handyFunctions'

export default class IndexController extends Controller {

  @tracked inputField = '';
  @tracked todos = todos;

  changeTodoInput = e => {
    const $target = e.target;
    const currentValue = $target.value;
    this.inputField = currentValue;
  }

  addTodo = () => {
    if (!isWhitespace(this.inputField)) {
      addTodo(this.inputField);
      this.inputField = '';
      this.todos = todos;
    } else {
      this.inputField = '';
    }
  }
}
