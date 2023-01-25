(function(){{
    var toRemove =     $that.filter(function (todo) {
        return todo.completed;
    });
        $that.remove(toRemove);
}})();