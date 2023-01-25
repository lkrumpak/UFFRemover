(function(){{
    var id = $(        $that).closest('li').data('id'), val = $.trim($(        $that).removeClass('editing').val());
    if (val) {
        self.system.notify('TodoListView:setTitleOfTodo', id, val);
    } else {
        self.system.notify('TodoListView:removeTodo', id);
    }
}})();