(function(){{
    var updatedTodos =     $that.state.todos.map(function (todo) {
        return todo !== command.todoToSave ? todo : Utils.extend({}, command.todoToSave, { title: command.text });
    });
        $that.setState({ todos: updatedTodos });
    Utils.store(LOCALSTORAGE_NAMESPACE + '.todos',     $that.state.todos);
}})();