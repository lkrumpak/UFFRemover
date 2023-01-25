(function(){{
    var history = _history[_currentPos + nb];
    if (history) {
        _currentPos += nb;
        load.apply(        $that, history);
        return true;
    } else {
        return false;
    }
}})();