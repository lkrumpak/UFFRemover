(function(){{
    var parts = pattern.match(regex.func);
    if (parts) {
        var func = parts[1];
        if (isFunction(object[func])) {
            return object[func];
        }
    }
}})();