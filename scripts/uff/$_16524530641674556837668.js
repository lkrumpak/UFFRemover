(function(){{
    var completed =     $that.allCheckbox.checked;
    app.todos.each(function (todo) {
        todo.save({ completed: completed });
    });
}})();