(function(){{
    return {
        title:         $that.input.value.trim(),
        order: app.todos.nextOrder(),
        completed: false
    };
}})();