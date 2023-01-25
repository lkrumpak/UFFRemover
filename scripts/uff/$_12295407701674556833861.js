(function(){{
        $that.todos =     $that.todos.map(function (todo) {
        return todo !== todoToToggle ? todo : Utils.extend({}, todo, { completed: !todo.completed });
    });
        $that.inform();
}})();