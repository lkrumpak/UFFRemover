(function(){{
    var _1b3, _1b4, _1b5, _1b6, _1b7, i, l;
    _1b3 =     $that.callbackQueue;
    _1b4 = false;
    _1b5 = false;
    _1b6 = {
        stopImmediatePropagation: function () {
            _1b4 = true;
        },
        preventDefault: function () {
            _1b5 = true;
        },
        oldPath: _1b1,
        newPath: _1b2,
        params: _1b0
    };
    _1b7 = [_1b6];
    if (_1b0 instanceof Array) {
        _1b7 = _1b7.concat(_1b0);
    } else {
        for (var key in _1b0) {
            _1b7.push(_1b0[key]);
        }
    }
    for (i = 0, l = _1b3.length; i < l; ++i) {
        if (!_1b4) {
            _1b3[i].apply(null, _1b7);
        }
    }
    return !_1b5;
}})();