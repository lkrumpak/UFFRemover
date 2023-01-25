(function(){{
    var _5bd = _5bc.charAt(0);
    if (_5bd == '"' || _5bd == '\'') {
        _5bc = _5bc.slice(1, -1);
    }
    _5bc = _5bc.replace(/\\/g, '');
    var _5be = _5ad[type || ''];
    return function (node) {
        var _5bf = node.getAttribute(name);
        return _5bf && _5be(_5bf, _5bc);
    };
}})();