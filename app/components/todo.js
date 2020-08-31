import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { updateTodo, deleteTodo } from './../data/todos';
import { action } from '@ember/object'

export default class TodoComponent extends Component {
  @tracked changeTodo = false;
  @tracked inputField = false;

  pressChange = () => {
    this.changeTodo = true;
  }

  pressSave = todo_id => {
    this.changeTodo = false;
    updateTodo(todo_id, this.inputField);
  }

  pressDelete = todo_id => {
    deleteTodo(todo_id);
  }

  inputTodo = e => {
    const currentTarget = e.target;
    const value = currentTarget.value;
    this.inputField = value;
  }
}
