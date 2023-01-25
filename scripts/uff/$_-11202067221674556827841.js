(function(){{
    var updatedTodos =     $that.state.todos.filter(function (todo) {
        return todo !== todoToDestroy;
    });
        $that.setState({ todos: updatedTodos });
    Utils.store(LOCALSTORAGE_NAMESPACE + '.todos',     $that.state.todos);
}})();