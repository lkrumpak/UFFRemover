(function(){{
    var list = _list, todo, i;
    for (i in _list) {
        todo = _list[i];
        if (todo.id === id) {
            return i;
        }
    }
    return -1;
}})();