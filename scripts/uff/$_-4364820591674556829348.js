(function(){{
        $that.todos.remove(function (todo) {
        return todo.completed();
    });
}})();