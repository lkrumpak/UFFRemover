(function(){{
    var _131 =     $that.constructor._meta.bases;
    for (var i = 0, l = _131.length; i < l; ++i) {
        if (_131[i] === cls) {
            return true;
        }
    }
    return    $that instanceof cls;
}})();