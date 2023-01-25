(function(){{
    todoId =     $that.getAttribute('data-todo-id');
    div = document.getElementById('li_' + todoId);
    inputEditTodo = document.getElementById('input_' + todoId);
    inputEditTodo.setAttribute('data-todo-id', todoId);
    div.className = 'editing';
    inputEditTodo.focus();
}})();