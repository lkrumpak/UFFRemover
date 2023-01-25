(function(){{
    if (_30a) {
        it = _30a(key, it);
    }
    var val, _30f = typeof it;
    if (_30f == 'number') {
        return isFinite(it) ? it + '' : 'null';
    }
    if (_30f == 'boolean') {
        return it + '';
    }
    if (it === null) {
        return 'null';
    }
    if (typeof it == 'string') {
        return _307(it);
    }
    if (_30f == 'function' || _30f == 'undefined') {
        return _30c;
    }
    if (typeof it.toJSON == 'function') {
        return _30d(it.toJSON(key), _30e, key);
    }
    if (it instanceof Date) {
        return '"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g, function (t, prop, plus) {
            var num = it['getUTC' + prop]() + (plus ? 1 : 0);
            return num < 10 ? '0' + num : num;
        });
    }
    if (it.valueOf() !== it) {
        return _30d(it.valueOf(), _30e, key);
    }
    var _310 = _30b ? _30e + _30b : '';
    var sep = _30b ? ' ' : '';
    var _311 = _30b ? '\n' : '';
    if (it instanceof Array) {
        var itl = it.length, res = [];
        for (key = 0; key < itl; key++) {
            var obj = it[key];
            val = _30d(obj, _310, key);
            if (typeof val != 'string') {
                val = 'null';
            }
            res.push(_311 + _310 + val);
        }
        return '[' + res.join(',') + _311 + _30e + ']';
    }
    var _312 = [];
    for (key in it) {
        var _313;
        if (it.hasOwnProperty(key)) {
            if (typeof key == 'number') {
                _313 = '"' + key + '"';
            } else {
                if (typeof key == 'string') {
                    _313 = _307(key);
                } else {
                    continue;
                }
            }
            val = _30d(it[key], _310, key);
            if (typeof val != 'string') {
                continue;
            }
            _312.push(_311 + _310 + _313 + ':' + sep + val);
        }
    }
    return '{' + _312.join(',') + _311 + _30e + '}';
}})();