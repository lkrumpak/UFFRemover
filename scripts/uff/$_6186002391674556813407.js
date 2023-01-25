(function(){{
    if (todo.completed) {
        todos.completed++;
    } else {
        todos.active++;
    }
    todos.total++;
}})();