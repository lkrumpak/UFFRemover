(function(){{
    var updatedTodos =     $that.state.todos.map(function (todo) {
        return todo !== todoToToggle ? todo : Utils.extend({}, todo, { completed: !todo.completed });
    });
        $that.setState({ todos: updatedTodos });
    Utils.store(LOCALSTORAGE_NAMESPACE + '.todos',     $that.state.todos);
}})();