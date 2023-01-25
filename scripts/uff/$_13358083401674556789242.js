(function(){{
    switch (        $that.filter()) {
    case 'active':
        return !todo.completed();
    case 'completed':
        return todo.completed();
    default:
        return true;
    }
}})();