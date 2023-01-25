(function(){{
    var view;
    view = new Todos({ todo: todo });
    return    $that.todos.append(view.render().el);
}})();