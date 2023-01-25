(function(){{
    node = dom.byId(node);
    var lc = name.toLowerCase(), _3fc = _3f4.names[lc] || name;
    if (_3fc == 'textContent' && !has('dom-textContent')) {
        return _3fb(node);
    }
    return node[_3fc];
}})();