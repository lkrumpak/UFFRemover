(function(){{
    _.invoke(app.todos.completed(), 'destroy');
    return false;
}})();