(function(){{
    var key, result, _i, _len, _ref;
    result = {};
    _ref =     $that.constructor.attributes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        if (key in            $that) {
            if (typeof                $that[key] === 'function') {
                result[key] =                 $that[key]();
            } else {
                result[key] =                 $that[key];
            }
        }
    }
    if (        $that.id) {
        result.id =         $that.id;
    }
    return result;
}})();