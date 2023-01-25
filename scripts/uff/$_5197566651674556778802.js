(function(){{
    var def = new can.Deferred();
        $that.localStore(function (todos) {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos.splice(i, 1);
                break;
            }
        }
        def.resolve({});
    });
    return def;
}})();