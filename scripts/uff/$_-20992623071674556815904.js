(function(){{
    var completed =     $that.allCheckbox.checked;
    app.todos.forEach(function (todo) {
        todo.save({ 'completed': completed });
    });
}})();