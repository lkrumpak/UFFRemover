(function(){{
    var stored;
    // In cases where either:
    //
    //   1. No key was specified
    //   2. A string key was specified, but no value provided
    //
    // Take the "read" path and allow the get method to determine
    // which value to return, respectively either:
    //
    //   1. The entire cache object
    //   2. The data stored at the key
    //
    if (key === undefined || key && typeof key === 'string' && value === undefined) {
        stored =         $that.get(owner, key);
        return stored !== undefined ? stored :         $that.get(owner, jQuery.camelCase(key));
    }
    // [*]When the key is not a string, or both a key and value
    // are specified, set or extend (existing objects) with either:
    //
    //   1. An object of properties
    //   2. A key and value
    //
        $that.set(owner, key, value);
    // Since the "set" path can have two possible entry points
    // return the expected data based on which path was taken[*]
    return value !== undefined ? value : key;
}})();