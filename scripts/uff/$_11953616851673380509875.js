(function(){{
    if (!aria.utils.Type.isObject(e))
        return [];
    var t = [];
    for (var n in e)
        e.hasOwnProperty(n) && t.push(n);
    return t;
}})();