(function(){{
    if (e) {
        var t = e.nodeName;
        return e === Aria.$window || aria.utils.Type.isString(t) || e === Aria.$frameworkWindow;
    }
    return !1;
}})();