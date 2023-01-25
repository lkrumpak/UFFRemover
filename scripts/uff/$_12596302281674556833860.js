(function(){{
        $that.todos =     $that.todos.concat({
        id: Utils.uuid(),
        title: title,
        completed: false
    });
        $that.inform();
}})();