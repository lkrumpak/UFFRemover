(function(){{
    var clone, record;
        $that.trigger('beforeCreate',     $that, options);
        $that.id || (    $that.id =     $that.cid);
    record =     $that.dup(false);
        $that.constructor.addRecord(record);
        $that.constructor.sort();
    clone = record.clone();
    clone.trigger('create', clone, options);
    clone.trigger('change', clone, 'create', options);
    return clone;
}})();