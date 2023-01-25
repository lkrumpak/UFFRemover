(function(){{
    var view = new TodoView({ model: todo });
        $that.$('.todo-list').append(view.render().el);
}})();