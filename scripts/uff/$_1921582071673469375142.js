(function(){{
    for (var r = 0, i = t.length; r < i; r++) {
        var s = t[r];
        if (!            $that._typeUtils.isObject(e) ||            $that._typeUtils.isInstanceOf(e, 'aria.core.JsObject'))
            break;
        if (!e[s]) {
            n ? e['*'] && r == i - 1 ? e = e['*'] : e = e['**'] : e = e['*'];
            break;
        }
        e = e[s];
    }
    return {
        node: e,
        index: r
    };
}})();