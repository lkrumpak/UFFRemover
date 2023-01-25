(function(){{
        $that.todos().forEach(function (todo) {
        // set even if value is the same, as subscribers are not notified in that case
        todo.completed(newValue);
    });
}})();