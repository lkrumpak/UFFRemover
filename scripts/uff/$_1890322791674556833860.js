(function(){{
    // Note: it's usually better to use immutable data structures since they're
    // easier to reason about and React works very well with them. That's why
    // we use map() and filter() everywhere instead of mutating the array or
    // todo items themselves.
        $that.todos =     $that.todos.map(function (todo) {
        return Utils.extend({}, todo, { completed: checked });
    });
        $that.inform();
}})();