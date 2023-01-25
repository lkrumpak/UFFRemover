(function(){{
    var def = new can.Deferred(), todo;
        $that.localStore(function (todos) {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todo = todos[i];
                break;
            }
        }
        can.extend(todo, attrs);
    });
    def.resolve({});
    return def;
}})();