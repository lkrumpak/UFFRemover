(function(){{
    if (typeof name == 'string' && typeof value == 'string') {
        _map[name] = value;
        return true;
    }
    return false;
}})();