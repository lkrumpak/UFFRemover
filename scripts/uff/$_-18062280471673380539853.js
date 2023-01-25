(function(){{
    var res = [];
    var key;
    for (key in        $that.storage) {
        if (!keypath || keypath === key || key.indexOf(keypath + '.') === 0) {
            res = res.concat(            $that.storage[key]);
        }
    }
    return res;
}})();