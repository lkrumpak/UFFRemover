(function(){{
    var todo =     $that.getTodo(id);
    todo.completed = !todo.completed;
        $that.notifyOfListUpdate();
}})();