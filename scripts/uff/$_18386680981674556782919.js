(function(){{
    var i =     $that.todos.length;
    while (i--) {
        if (            $that.todos[i].id === id) {
                        $that.todos.splice(i, 1);
        }
    }
        $that.todosModified();
}})();