(function(){{
    return {
        title:         $that.input.val().trim(),
        order: Todos.nextOrder(),
        completed: false
    };
}})();