(function(){{
    var atts, record;
    if (newRecord == null) {
        newRecord = true;
    }
    atts =     $that.attributes();
    if (newRecord) {
        delete atts.id;
    } else {
        atts.cid =         $that.cid;
    }
    record = new    $that.constructor(atts);
    if (!newRecord) {
                $that._callbacks && (record._callbacks =         $that._callbacks);
    }
    return record;
}})();