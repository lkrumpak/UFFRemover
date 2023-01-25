(function(){{
    var isChecked = $(e.target).prop('checked');
        $that.todos.forEach(function (todo) {
        todo.completed = isChecked;
    });
        $that.render();
}})();