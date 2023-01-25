(function(){{
    if (!callback) {
        return;
    }
    var todos = JSON.parse(localStorage[    $that._dbName]).todos;
    callback.call(    $that, todos.filter(function (todo) {
        for (var q in query) {
            if (query[q] !== todo[q]) {
                return false;
            }
        }
        return true;
    }));
}})();