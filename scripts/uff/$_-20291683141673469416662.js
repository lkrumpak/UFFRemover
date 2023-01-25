(function(){{
    var i, len, queryResult;
    len =     $that.fragments.length;
    for (i = 0; i < len; i += 1) {
        if (queryResult =             $that.fragments[i].find(selector)) {
            return queryResult;
        }
    }
    return null;
}})();