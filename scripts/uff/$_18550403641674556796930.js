(function(){{
    var id, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = ids.length; _i < _len; _i++) {
        id = ids[_i];
        if (            $that.find(id, notFound)) {
            _results.push(            $that.find(id));
        }
    }
    return _results;
}})();