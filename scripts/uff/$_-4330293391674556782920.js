(function(){{
    var i =     $that.todos.length;
    while (i--) {
        if (            $that.todos[i].id === todo.id) {
                        $that.todos[i].title = todo.title;
                        $that.todos[i].completed = todo.completed;
        }
    }
        $that.todosModified();
}})();