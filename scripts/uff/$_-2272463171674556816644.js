(function(){{
    var i, len;
    len =     $that.fragments.length;
    for (i = 0; i < len; i += 1) {
                $that.fragments[i].findAll(selector, query);
    }
}})();