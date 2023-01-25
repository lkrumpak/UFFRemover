(function(){{
    var record, _i, _len, _ref, _results;
    _ref =     $that.records;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        record = _ref[_i];
        _results.push(callback(record.clone()));
    }
    return _results;
}})();