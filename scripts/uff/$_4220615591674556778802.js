(function(){{
    var def = new can.Deferred();
        $that.localStore(function (todos) {
        attrs.id = attrs.id || parseInt(100000 * Math.random(), 10);
        todos.push(attrs);
    });
    def.resolve({ id: attrs.id });
    return def;
}})();