(function(){{
    mod = str;
    for (var param in params) {
        if (params.hasOwnProperty(param)) {
            mod = params[param](str);
            if (mod !== str) {
                break;
            }
        }
    }
    return mod === str ? '([._a-zA-Z0-9-%()]+)' : mod;
}})();