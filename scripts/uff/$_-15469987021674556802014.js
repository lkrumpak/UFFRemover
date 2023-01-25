(function(){{
    var value =     $that.newTodo &&    $that.newTodo.trim();
    if (!value) {
        return;
    }
        $that.todos.push({
        title: value,
        completed: false
    });
        $that.newTodo = '';
}})();