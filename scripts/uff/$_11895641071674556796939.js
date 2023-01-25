(function(){{
    var clone, records;
        $that.trigger('beforeUpdate',     $that, options);
    records =     $that.constructor.irecords;
    records[    $that.id].load(    $that.attributes());
        $that.constructor.sort();
    clone = records[    $that.id].clone();
    clone.trigger('update', clone, options);
    clone.trigger('change', clone, 'update', options);
    return clone;
}})();