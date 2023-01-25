(function(){{
    var root;
    if (root =         $that.irecords[record.id || record.cid]) {
        root.refresh(record);
    } else {
        record.id || (record.id = record.cid);
                $that.irecords[record.id] =         $that.irecords[record.cid] = record;
                $that.records.push(record);
    }
    return record;
}})();