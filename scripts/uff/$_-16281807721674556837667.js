(function(){{
    return {
        title:         $that.$input.val().trim(),
        order: app.todos.nextOrder(),
        completed: false
    };
}})();