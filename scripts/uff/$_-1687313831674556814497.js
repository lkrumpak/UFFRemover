(function(){{
    var attr, attrs, unset, changes, silent, changing, prev, current;
    if (key == null)
        return        $that;
    // Handle both `"key", value` and `{key: value}` -style arguments.
    if (typeof key === 'object') {
        attrs = key;
        options = val;
    } else {
        (attrs = {})[key] = val;
    }
    options || (options = {});
    // Run validation.
    if (!        $that._validate(attrs, options))
        return false;
    // Extract attributes and options.
    unset = options.unset;
    silent = options.silent;
    changes = [];
    changing =     $that._changing;
        $that._changing = true;
    if (!changing) {
                $that._previousAttributes = _.extend(Object.create(null),         $that.attributes);
                $that.changed = {};
    }
    current =     $that.attributes, prev =     $that._previousAttributes;
    // Check for changes of `id`.
    if (        $that.idAttribute in attrs)
                $that.id = attrs[        $that.idAttribute];
    // For each `set` attribute, update or delete the current value.
    for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val))
            changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
                        $that.changed[attr] = val;
        } else {
            delete            $that.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
    }
    // Trigger all relevant attribute changes.
    if (!silent) {
        if (changes.length)
                        $that._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
                        $that.trigger('change:' + changes[i],             $that, current[changes[i]], options);
        }
    }
    // You might be wondering why there's a `while` loop here. Changes can
    // be recursively nested within `"change"` events.
    if (changing)
        return        $that;
    if (!silent) {
        while (            $that._pending) {
            options =             $that._pending;
                        $that._pending = false;
                        $that.trigger('change',             $that, options);
        }
    }
        $that._pending = false;
        $that._changing = false;
    return    $that;
}})();