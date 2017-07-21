// begin
// Version 4 - Booleans

// it should have a way to store todos AS OBJECTS
// it should have a METHOD to display todos AS OBJECTS	
// it should have a METHOD to add todos AS OBJECTS
// it should have a METHOD to change todos AS OBJECTS
// it should have a METHOD to delete todos in the OBJECT

todoList = {

	// todos: ['item 1', 'item 2', 'item 3'], 
	todos: [ ], 

	displayTodos: function() {

		if (this.todos.length === 0 ) {
			console.log("\nThere are no todos.");
		} else {

			console.log("\nMy todos: ")
			for (var i = 0; i < this.todos.length; i++) {

				if (this.todos[i].completed === true) {
					console.log("(x)", this.todos[i].todoText);
				} else {
					console.log("( )", this.todos[i].todoText);
				}
			}
		}
	},

	addTodo: function(todoText) {
		//console.log(this.displayTodos());
		console.log(this.todos.push( {
			todoText: todoText,
			completed: false
		}));
		// // console.log(this.displayTodos());
	},

	changeTodo: function(position, todoText) {
		//console.log(this.todos[position]);
		this.todos[position].todoText = todoText;
		//console.log(this.todos[position]);
		console.log(this.displayTodos());
	},

	deleteTodo: function(position) {
		//console.log(todoList.displayTodos());

		this.todos.splice(position, 1);
		console.log(todoList.displayTodos());
	},

	toggleCompleted: function(position) {
		//console.log(this.todos[position]);
		this.todos[position].completed = !this.todos[position].completed;
		//console.log(this.todos[position]);

		console.log(this.displayTodos());
	},

	toggleAll: function() {
		var allTodos = this.todos.length;
		var completedCount = 0;

		for (var td = 0; td < allTodos; td++) {
			if (this.todos[td].completed === true) {
				completedCount++;
			} 
		}

		if (allTodos === completedCount) {
			// make all false
			for (var td = 0; td < allTodos; td++) {
				this.todos[td].completed = false;
			} 

		} else {
			for (var td = 0; td < allTodos; td++) {
				this.todos[td].completed = true;
			} 
		}
	}

};


/* 

todoList.displayTodos()
todoList.changeTodo(2, 'updating 3rd item')
todoList.addTodo('Item 1')
todoList.addTodo('Item 2')
todoList.addTodo('Item 3')
todoList.addTodo('Item 4')
todoList.toggleCompleted(0)

 */
