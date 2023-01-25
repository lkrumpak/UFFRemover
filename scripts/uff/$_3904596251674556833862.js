(function(){{
        $that.todos =     $that.todos.map(function (todo) {
        return todo !== todoToSave ? todo : Utils.extend({}, todo, { title: text });
    });
        $that.inform();
}})();