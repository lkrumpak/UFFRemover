(function(){{
    e = e || event;
    m.redraw.strategy('diff');
    m.startComputation();
    try {
        return callback.call(object, e);
    } finally {
        endFirstComputation();
    }
}})();