(function(){{
    var n = dom.byId(node), l = arguments.length, op = name == 'opacity';
    if (l == 2 && op) {
        return _3ce(n);
    }
    name = _3d7[name] ? 'cssFloat' in n.style ? 'cssFloat' : 'styleFloat' : name;
    var s = _3c6.getComputedStyle(n);
    return l == 1 ? s : _3d5(n, name, s[name] || n.style[name]);
}})();