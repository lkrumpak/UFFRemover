(function(){{
    if (typeof index == 'undefined') {
        return _history;
    } else {
        return _history[_history.length - index - 1];
    }
}})();