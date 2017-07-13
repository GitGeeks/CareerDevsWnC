// begin
// Version 1 - Arrays -- requirements
// it should have a way to store todos















var todos = ['item 1', 'item 2', 'item 3']

// it should have a FUNCTION to display todos












function displayTodos() {
	console.log('My todos:', todos)

}



// it should have a FUNCTION to add todos



















// todos.push('item 4')
// todos.push('item 5')





function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

// it should have a FUNCTION to change todos
// todos[0]









function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}










todos[0] = 'item 1 updated'
todos

// it should have a FUNCTION to delete todos



















todos.splice(0,1)
todos
todos.splice(3,1)
todos.splice(3,1)
