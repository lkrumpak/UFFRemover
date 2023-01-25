(function(){{
    var data = { todos: [] };
    localStorage[    $that._dbName] = JSON.stringify(data);
    callback.call(    $that, data.todos);
}})();