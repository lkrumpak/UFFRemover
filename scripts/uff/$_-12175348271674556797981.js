(function(){{
    var val;
    val = $.trim(    $that.newTodoInput.val());
    if (e.which === ENTER_KEY && val) {
        Todo.create({ title: val });
        return        $that.newTodoInput.val('');
    }
}})();