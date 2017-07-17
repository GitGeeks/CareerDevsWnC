// begin
// Version 1 - Arrays -- requirements
// it should have a way to store todos AS OBJECTS


	












var todos = ['item 1', 'item 2', 'item 3']

// it should have a FUNCTION to display todos












function displayTodos() {
	console.log('My todos:', todos)

}



// it should have a FUNCTION to add todos



<<<<<<< HEAD
=======

>>>>>>> 596e2642947d29d64ea4f09f525dadb1c33cea50
















// todos.push('item 4')
// todos.push('item 5')





function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

// it should have a FUNCTION to change todos
// todos[0]












<<<<<<< HEAD








// todos[0] = 'item 1 updated'
// todos






function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

// it should have a FUNCTION to delete todos



















// todos.splice(0,1)
// todos
// todos.splice(3,1)
// todos.splice(3,1)




function deleteTodo(position) {
	displayTodos();
	todos.splice(position, 1);
	displayTodos();
}


=======
todos.splice(0,1)
todos
todos.splice(3,1)
todos.splice(3,1)
<<<<<<< HEAD
todos.splice(3,2)
>>>>>>> version1-Arrays
=======

// version 2 - Functions

var todos = ['item 1', 'item 2', 'item 3']

// it should have a function to display todos

















// it should have a function to add todos


// it should have a function to change todos


// it should have a function to delete todos




>>>>>>> 596e2642947d29d64ea4f09f525dadb1c33cea50
