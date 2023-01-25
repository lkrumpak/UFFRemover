(function(){{
    _.each(Todos.completed(), function (todo) {
        return todo.clear();
    });
    return false;
}})();