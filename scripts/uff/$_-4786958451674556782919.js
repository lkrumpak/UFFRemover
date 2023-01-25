(function(){{
    var i =     $that.todos.length;
    while (i--) {
                $that.todos[i].completed = status;
    }
        $that.todosModified();
}})();