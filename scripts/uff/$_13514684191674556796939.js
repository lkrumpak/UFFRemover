(function(){{
    var record;
    record =     $that.constructor.irecords[    $that.id] ||    $that;
    return Events.bind.apply(record, arguments);
}})();