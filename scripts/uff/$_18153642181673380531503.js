(function(){{
    var record;
    record =     $that.constructor.irecords[    $that.id] ||    $that;
    return Events.one.apply(record, arguments);
}})();