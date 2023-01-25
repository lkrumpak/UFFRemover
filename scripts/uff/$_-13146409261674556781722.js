(function(){{
        $that.todos =     $that.todos.filter(function (todo) {
        return !todo.completed;
    });
        $that.inform();
}})();