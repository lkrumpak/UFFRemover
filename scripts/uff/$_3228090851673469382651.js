(function(){{
    var todo, todoId, div, inputEditTodo;
    inputEditTodo = event.target;
    todoId = inputEditTodo.getAttribute('data-todo-id');
    todo =     $that.getTodoById(todoId);
    inputEditTodo.value = todo.title;
    inputEditTodo.completed = todo.completed;
    div = document.getElementById('li_' + todoId);
    div.className = 'view';
        $that.newTodoField.focus();
}})();