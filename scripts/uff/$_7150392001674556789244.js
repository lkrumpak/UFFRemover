(function(){{
    if (!todo.editing()) {
        return;
    }
    todo.editing(false);
    todo.title(todo.title().trim());
    if (!todo.title()) {
                $that.list.splice(index, 1);
    }
    app.storage.put(    $that.list);
}})();