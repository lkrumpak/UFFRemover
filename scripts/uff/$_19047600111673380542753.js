(function(){{
    var _6be = {};
    if (!name) {
        _6ae.forEach([
            old,
            _6bd
        ], function (_6bf) {
            var list = _6bf && _6bf.get('properties');
            if (list) {
                _6ae.forEach(list, function (item) {
                    if (!_6b8.hasControllerProperty(item)) {
                        _6be[item] = 1;
                    }
                });
            } else {
                for (var s in _6bf) {
                    if (_6bf.hasOwnProperty(s) && !_6b8.hasControllerProperty(s)) {
                        _6be[s] = 1;
                    }
                }
            }
        });
    } else {
        _6be[name] = 1;
    }
    for (var s in _6be) {
        _6b7.call(_6b8, s, !old ? void 0 : old.get ? old.get(s) : old[s], !_6bd ? void 0 : _6bd.get ? _6bd.get(s) : _6bd[s]);
    }
}})();