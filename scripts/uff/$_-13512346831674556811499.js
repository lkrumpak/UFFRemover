(function(){{
    var t = e;
    while (!E(t.root)) {
        if (!t.parent)
            break;
        t = t.parent;
    }
    return t;
}})();