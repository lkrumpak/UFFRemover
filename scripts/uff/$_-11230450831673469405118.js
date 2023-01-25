(function(){{
    var res = {};
    var key;
    for (key in        $that.storage) {
        if (keypath === key || key.indexOf(keypath + '.') === 0) {
            res[key] = slice.call(            $that.storage[key]);
        }
    }
    return res;
}})();