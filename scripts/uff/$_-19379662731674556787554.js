(function(){{
    var isChecked = !!$(    $that).prop('checked');
    self.system.notify('TodoListView:setDoneForAllTodos', isChecked);
}})();