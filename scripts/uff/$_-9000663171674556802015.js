(function(){{
    if (!        $that.editedTodo) {
        return;
    }
        $that.editedTodo = null;
    todo.title = todo.title.trim();
    if (!todo.title) {
                $that.removeTodo(todo);
    }
}})();