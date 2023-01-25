(function(){{
        $that.todos =     $that.todos.filter(function (candidate) {
        return candidate !== todo;
    });
        $that.inform();
}})();