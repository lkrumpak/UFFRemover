(function(){{
    var targetState = !app.me.allCompleted;
    app.me.todos.each(function (todo) {
        todo.completed = targetState;
    });
}})();