(function(){{
    var i, name, data, elem =         $that[0], attrs = elem && elem.attributes;
    // Gets all values
    if (key === undefined) {
        if (            $that.length) {
            data = data_user.get(elem);
            if (elem.nodeType === 1 && !data_priv.get(elem, 'hasDataAttrs')) {
                i = attrs.length;
                while (i--) {
                    // Support: IE11+
                    // The attrs elements can be null (#14894)
                    if (attrs[i]) {
                        name = attrs[i].name;
                        if (name.indexOf('data-') === 0) {
                            name = jQuery.camelCase(name.slice(5));
                            dataAttr(elem, name, data[name]);
                        }
                    }
                }
                data_priv.set(elem, 'hasDataAttrs', true);
            }
        }
        return data;
    }
    // Sets multiple values
    if (typeof key === 'object') {
        return        $that.each(function () {
            data_user.set(this, key);
        });
    }
    return access(    $that, function (value) {
        var data, camelKey = jQuery.camelCase(key);
        // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.
        if (elem && value === undefined) {
            // Attempt to get data from the cache
            // with the key as-is
            data = data_user.get(elem, key);
            if (data !== undefined) {
                return data;
            }
            // Attempt to get data from the cache
            // with the key camelized
            data = data_user.get(elem, camelKey);
            if (data !== undefined) {
                return data;
            }
            // Attempt to "discover" the data in
            // HTML5 custom data-* attrs
            data = dataAttr(elem, camelKey, undefined);
            if (data !== undefined) {
                return data;
            }
            // We tried really hard, but the data doesn't exist.
            return;
        }
        // Set the data...
        this.each(function () {
            // First, attempt to store a copy or reference of any
            // data that might've been store with a camelCased key.
            var data = data_user.get(this, camelKey);
            // For HTML5 data-* attribute interop, we have to
            // store property names with dashes in a camelCase form.
            // This might not apply to all properties...*
            data_user.set(this, camelKey, value);
            // *... In the case of properties that might _actually_
            // have dashes, we need to also store a copy of that
            // unchanged property.
            if (key.indexOf('-') !== -1 && data !== undefined) {
                data_user.set(this, key, value);
            }
        });
    }, null, value, arguments.length > 1, null, true);
}})();