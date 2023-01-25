(function(){{
    var updatedTodos =     $that.state.todos.map(function (todo) {
        return Utils.extend({}, todo, { completed: checked });
    });
        $that.setState({ todos: updatedTodos });
    Utils.store(LOCALSTORAGE_NAMESPACE + '.todos',     $that.state.todos);
}})();