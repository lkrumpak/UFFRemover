(function(){{
    var id = $(el).closest('li').data('id');
    var todos =     $that.todos;
    var i = todos.length;
    while (i--) {
        if (todos[i].id === id) {
            return i;
        }
    }
}})();