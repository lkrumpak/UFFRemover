(function(){{
    var i, name, camel, unlock =         $that.key(owner), cache =         $that.cache[unlock];
    if (key === undefined) {
                $that.cache[unlock] = {};
    } else {
        // Support array or space separated string of keys
        if (jQuery.isArray(key)) {
            // If "name" is an array of keys...
            // When data is initially created, via ("key", "val") signature,
            // keys will be converted to camelCase.
            // Since there is no way to tell _how_ a key was added, remove
            // both plain key and camelCase key. #12786
            // This will only penalize the array argument path.
            name = key.concat(key.map(jQuery.camelCase));
        } else {
            camel = jQuery.camelCase(key);
            // Try the string as a key before any manipulation
            if (key in cache) {
                name = [
                    key,
                    camel
                ];
            } else {
                // If a key with the spaces exists, use it.
                // Otherwise, create an array by matching non-whitespace
                name = camel;
                name = name in cache ? [name] : name.match(rnotwhite) || [];
            }
        }
        i = name.length;
        while (i--) {
            delete cache[name[i]];
        }
    }
}})();