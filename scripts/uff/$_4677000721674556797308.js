(function(){{
    var r;
        $that.routes.length = 0;
    return    $that.constructor.routers = function () {
        var _i, _len, _ref1, _results;
        _ref1 = this.constructor.routers;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            r = _ref1[_i];
            if (r !== this) {
                _results.push(r);
            }
        }
        return _results;
    }.call(    $that);
}})();