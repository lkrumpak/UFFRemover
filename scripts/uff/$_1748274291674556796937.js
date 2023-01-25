(function(){{
    var i, record, records, _i, _len;
    if (options == null) {
        options = {};
    }
    records =     $that.constructor.records.slice(0);
    for (i = _i = 0, _len = records.length; _i < _len; i = ++_i) {
        record = records[i];
        if (!            $that.eql(record)) {
            continue;
        }
        records.splice(i, 1);
        break;
    }
        $that.constructor.records = records;
    if (options.clear) {
        delete        $that.constructor.irecords[        $that.id];
        return delete        $that.constructor.irecords[        $that.cid];
    }
}})();