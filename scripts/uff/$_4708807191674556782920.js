(function(){{
    newTodo.id =     $that.getUuid();
        $that.todos.unshift(newTodo);
        $that.todosModified();
}})();