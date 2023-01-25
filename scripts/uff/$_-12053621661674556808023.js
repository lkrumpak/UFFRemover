(function(){{
    if (!_2d2.some(_2dd, function (obj) {
            if (obj.error === _2e1) {
                if (_2e2) {
                    obj.handled = true;
                }
                return true;
            }
        })) {
        _2dd.push({
            error: _2e1,
            rejection: _2e3,
            handled: _2e2,
            deferred: _2e4,
            timestamp: new Date().getTime()
        });
    }
    if (!_2de) {
        _2de = setTimeout(_2e5, _2df);
    }
}})();