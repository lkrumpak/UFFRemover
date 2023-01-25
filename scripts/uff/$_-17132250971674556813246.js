(function(){{
    var data = JSON.parse(localStorage[    $that._dbName]);
    var todos = data.todos;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1);
            break;
        }
    }
    localStorage[    $that._dbName] = JSON.stringify(data);
    callback.call(    $that, todos);
}})();