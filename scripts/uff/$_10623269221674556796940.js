(function(){{
    var record;
    record =     $that.constructor.irecords[    $that.id] ||    $that;
    return Events.unbind.apply(record, arguments);
}})();