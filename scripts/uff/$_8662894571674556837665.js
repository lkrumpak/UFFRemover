(function(){{
    var view = new app.TodoView({ model: todo });
        $that.$list.append(view.render().el);
}})();