(function(){{
        $that.todos =     $that.todos.concat({
        id: utils_1.Utils.uuid(),
        title: title,
        completed: false
    });
        $that.inform();
}})();