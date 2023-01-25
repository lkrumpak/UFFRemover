(function(){{
    var checked;
    checked = e.target.checked;
    return Todo.each(function (todo) {
        /*
        			TODO: Model updateAttribute sometimes won't stick:
        				https://github.com/maccman/spine/issues/219
         */
        todo.updateAttribute('completed', checked);
        return todo.trigger('update', todo);
    });
}})();