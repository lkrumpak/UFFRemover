(function(){{
    node = dom.byId(node);
    var lc = name.toLowerCase(), _3f2 = prop.names[lc] || name;
    if (_3f2 in node && _3f2 != 'href') {
        return node[_3f2];
    }
    var _3f3 = _3e9[lc] || name;
    return _3ea(node, _3f3) ? node.getAttribute(_3f3) : null;
}})();