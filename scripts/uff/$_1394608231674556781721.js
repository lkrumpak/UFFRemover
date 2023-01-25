(function(){{
        $that.todos =     $that.todos.map(function (todo) {
        return todo !== todoToToggle ? todo : utils_1.Utils.extend({}, todo, { completed: !todo.completed });
    });
        $that.inform();
}})();