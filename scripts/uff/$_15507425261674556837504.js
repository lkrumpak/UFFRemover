(function(){{
    return    $that.model.get('completed') ? app.TodoFilter === 'active' : app.TodoFilter === 'completed';
}})();