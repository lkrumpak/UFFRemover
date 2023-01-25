(function(){{
        $that.setState({ todos:         $that.state.todos.concat(todo) });
    Utils.store(LOCALSTORAGE_NAMESPACE + '.todos',     $that.state.todos);
}})();