export const todos = ['todo'];

export const addTodo = (inputField) => {
  todos.push(inputField);
}

export const updateTodo = (todo_id, inputField) => {
  todos[todo_id] = inputField;
}

export const deleteTodo = (todo_id) => {
  todos.splice(todo_id, 1);
}
