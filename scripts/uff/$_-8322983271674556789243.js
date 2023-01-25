(function(){{
    if (todo.completed()) {
        todo.completed(false);
    } else {
        todo.completed(true);
    }
    app.storage.put(    $that.list);
}})();