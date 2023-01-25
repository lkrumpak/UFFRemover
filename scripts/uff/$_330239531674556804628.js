(function(){{
    if (e.which === ENTER_KEY) {
        e.target.blur();
    }
    if (e.which === ESCAPE_KEY) {
        $(e.target).data('abort', true).blur();
    }
}})();