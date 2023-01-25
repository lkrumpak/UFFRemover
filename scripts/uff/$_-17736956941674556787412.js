(function(){{
    var $input = $(        $that), val = $.trim($input.val());
    if (e.which !== self.enterKey || !val) {
        return;
    }
    self.system.notify('TodoFormView:addTodo', {
        title: val,
        id: self.uuidUtil.uuid(),
        completed: false
    });
    $input.val('');
}})();