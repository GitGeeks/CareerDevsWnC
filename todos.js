// begin
// Version 3 - Objects/Models -- properties (variables), methods (functions)

// it should have a way to store todos AS OBJECTS

// it should have a METHOD to display todos AS OBJECTS
	
// it should have a METHOD to add todos AS OBJECTS

// it should have a METHOD to change todos AS OBJECTS

// it should have a METHOD to delete todos in the OBJECT


todoList = {

	todos: ['item 1', 'item 2', 'item 3'], 

	displayTodos: function() {
		console.log("My todos: ", this.todos)
	},

	addTodo: function(todo) {
		console.log(this.displayTodos());
		console.log(this.todos.push(todo));
		console.log(this.displayTodos());
	},

	changeTodo: function(position, change) {
		console.log(this.todos[position]);
		this.todos[position] = change;
		console.log(this.todos[position]);
	},

	deleteTodo: function(position) {
		console.log(this.displayTodos());
		this.todos.splice(position, 1);
		console.log(this.displayTodos());
	}

}



