(function(){{
    var key;
    if (!value) {
        return true;
    }
    for (key in value) {
        return false;
    }
    return true;
}})();