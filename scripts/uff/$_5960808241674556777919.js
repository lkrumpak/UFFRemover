(function(){{
    // Info if this is List or not
    var isList = can.List &&        $that instanceof can.List,
        // Convert the `attr` into parts (if nested).
        parts = attrParts(attr),
        // The actual property to remove.
        prop = parts.shift(),
        // The current value.
        current = isList ?         $that[prop] :         $that._data[prop];
    // If we have more parts, call `removeAttr` on that part.
    if (parts.length && current) {
        return current.removeAttr(parts);
    } else {
        if (!!~attr.indexOf('.')) {
            prop = attr;
        }
        if (isList) {
                        $that.splice(prop, 1);
        } else if (prop in            $that._data) {
            // Otherwise, `delete`.
            delete            $that._data[prop];
            // Create the event.
            if (!(prop in                $that.constructor.prototype)) {
                delete                $that[prop];
            }
            // Let others know the number of keys have changed
            can.batch.trigger(            $that, '__keys');
                        $that._triggerChange(prop, 'remove', undefined, current);
        }
        return current;
    }
}})();