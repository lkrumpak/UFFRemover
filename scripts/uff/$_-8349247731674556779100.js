(function(){{
    if (filter === 'completed') {
        return todo.attr('complete');
    }
    if (filter === 'active') {
        return !todo.attr('complete');
    }
    return true;
}})();