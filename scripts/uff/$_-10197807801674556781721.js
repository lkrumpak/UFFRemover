(function(){{
        $that.todos =     $that.todos.map(function (todo) {
        return todo !== todoToSave ? todo : utils_1.Utils.extend({}, todo, { title: text });
    });
        $that.inform();
}})();