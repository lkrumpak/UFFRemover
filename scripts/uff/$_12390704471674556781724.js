(function(){{
    return React.createElement(todoItem_1.TodoItem, {
        'key': todo.id,
        'todo': todo,
        'onToggle': _this.toggle.bind(_this, todo),
        'onDestroy': _this.destroy.bind(_this, todo),
        'onEdit': _this.edit.bind(_this, todo),
        'editing': _this.state.editing === todo.id,
        'onSave': _this.save.bind(_this, todo),
        'onCancel': function (e) {
            return _this.cancel();
        }
    });
}})();