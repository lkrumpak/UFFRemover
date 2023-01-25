(function(){{
    if (str.charAt(0) === '?')
        str = str.substring(1);
    var pairs = str.split('&'), params = {};
    for (var i = 0, len = pairs.length; i < len; i++) {
        var pair = pairs[i].split('=');
        var key = decodeURIComponent(pair[0]);
        var value = pair.length == 2 ? decodeURIComponent(pair[1]) : null;
        if (params[key] != null) {
            if (type.call(params[key]) !== ARRAY)
                params[key] = [params[key]];
            params[key].push(value);
        } else
            params[key] = value;
    }
    return params;
}})();