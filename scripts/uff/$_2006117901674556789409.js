(function(){{
    m.redraw.strategy('none');
    if (e.keyCode === app.ENTER_KEY) {
        onenter();
        m.redraw.strategy('diff');
    } else if (e.keyCode === app.ESC_KEY) {
        onescape();
        m.redraw.strategy('diff');
    }
}})();