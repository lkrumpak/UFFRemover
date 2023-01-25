(function(){{
    var completed =     $that.allCheckbox.checked;
    Todos.each(function (todo) {
        return todo.save({ 'completed': completed });
    });
}})();