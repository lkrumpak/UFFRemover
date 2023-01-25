(function(){{
    var records;
    if (id ===        $that.id) {
        return;
    }
    records =     $that.constructor.irecords;
    records[id] = records[    $that.id];
    if (        $that.cid !==        $that.id) {
        delete records[        $that.id];
    }
        $that.id = id;
    return    $that.save();
}})();