(function(){{
    var isCompleted =     $that.model.get('completed');
    return // hidden cases only
    !isCompleted && app.TodoFilter === 'completed' || isCompleted && app.TodoFilter === 'active';
}})();