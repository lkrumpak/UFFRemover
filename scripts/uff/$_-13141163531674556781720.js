(function(){{
        $that.todos =     $that.todos.map(function (todo) {
        return utils_1.Utils.extend({}, todo, { completed: checked });
    });
        $that.inform();
}})();