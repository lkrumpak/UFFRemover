(function(){{
    if (ev.which === ESCAPE_KEY) {
        el.val(todo.attr('text'));
        todo.attr('editing', false);
    }
}})();