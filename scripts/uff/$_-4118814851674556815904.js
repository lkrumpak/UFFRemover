(function(){{
    app.todos.completed().forEach(function (todo) {
        todo.destroy();
    });
    return false;
}})();