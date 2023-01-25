(function(){{
    var current =     $that.current().trim();
    if (current) {
                $that.todos.push(new Todo(current));
                $that.current('');
    }
}})();