(function(){{
    var view = new app.TodoView({ model: todo });
    document.querySelector('#todo-list').appendChild(view.render().el);
}})();