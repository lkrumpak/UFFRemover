(function(){{
    var n = dom.byId(node), l = arguments.length, op = name == 'opacity';
    name = _3d7[name] ? 'cssFloat' in n.style ? 'cssFloat' : 'styleFloat' : name;
    if (l == 3) {
        return op ? _3cf(n, _3d8) : n.style[name] = _3d8;
    }
    for (var x in name) {
        _3c6.set(node, x, name[x]);
    }
    return _3c6.getComputedStyle(n);
}})();