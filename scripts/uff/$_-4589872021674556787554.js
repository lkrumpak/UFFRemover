(function(){{
    var id = $(    $that).closest('li').data('id');
    self.system.notify('TodoListView:removeTodo', id);
}})();