(function(){{
    for (var n in attrs) {
        if (item.get(n) !== attrs[n]) {
            return false;
        }
    }
    return true;
}})();