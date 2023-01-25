(function(){{
    var record, _i, _len, _ref;
    _ref =     $that.records;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        record = _ref[_i];
        if (record[name] === value) {
            return record.clone();
        }
    }
    return null;
}})();