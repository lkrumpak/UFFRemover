(function(){{
    var prop,
        // There may be an unlock assigned to this node,
        // if there is no entry for this "owner", create one inline
        // and set the unlock as though an owner entry had always existed
        unlock =         $that.key(owner), cache =         $that.cache[unlock];
    // Handle: [ owner, key, value ] args
    if (typeof data === 'string') {
        cache[data] = value;    // Handle: [ owner, { properties } ] args
    } else {
        // Fresh assignments by object are shallow copied
        if (jQuery.isEmptyObject(cache)) {
            jQuery.extend(            $that.cache[unlock], data);    // Otherwise, copy the properties one-by-one to the cache object
        } else {
            for (prop in data) {
                cache[prop] = data[prop];
            }
        }
    }
    return cache;
}})();