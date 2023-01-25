(function(){{
    if (maxHistory >= 0) {
        _maxHistory = maxHistory;
        ensureMaxHistory();
        return true;
    } else {
        return false;
    }
}})();