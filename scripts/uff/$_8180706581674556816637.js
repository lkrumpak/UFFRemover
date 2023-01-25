(function(){{
    var keys, key, i;
    keys = keypath.split('.');
    i = keys.length;
    while (i--) {
        key = keys[i];
        if (key === 'undefined' || !keyPattern.test(key)) {
            return false;
        }
    }
    return true;
}})();