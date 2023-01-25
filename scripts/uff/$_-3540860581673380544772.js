(function(){{
    var ret = v;
    if (typeof v === 'number') {
        ret =         $that.explode()[v];
    } else if (typeof v === 'string') {
        var h =         $that.explode();
        ret = h.indexOf(v);
    } else {
        ret =         $that.explode();
    }
    return ret;
}})();