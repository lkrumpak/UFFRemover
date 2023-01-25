(function(){{
    var now = new Date().getTime();
    var _2e6 = now - _2df;
    _2dd = _2d2.filter(_2dd, function (obj) {
        if (obj.timestamp < _2e6) {
            if (!obj.handled) {
                _2d3(obj.error, obj.rejection, obj.deferred);
            }
            return false;
        }
        return true;
    });
    if (_2dd.length) {
        _2de = setTimeout(_2e5, _2dd[0].timestamp + _2df - now);
    } else {
        _2de = false;
    }
}})();