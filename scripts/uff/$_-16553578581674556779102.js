(function(){{
        $that.attr('todos').completed().forEach(function (todo) {
        todo.destroy();
    });
}})();