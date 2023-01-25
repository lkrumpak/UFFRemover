(function(){{
    if (key == null)
        return        $that;
    // Handle both `"key", value` and `{key: value}` -style arguments.
    var attrs;
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
    var unset = options.unset;
    var silent = options.silent;
    var changes = [];
    var changing =     $that._changing;
        $that._changing = true;
    if (!changing) {
                $that._previousAttributes = _.clone(        $that.attributes);
                $that.changed = {};
    }
    var current =     $that.attributes;
    var changed =     $that.changed;
    var prev =     $that._previousAttributes;
    // Check for changes of `id`.
    if (        $that.idAttribute in attrs)
                $that.id = attrs[        $that.idAttribute];
    // For each `set` attribute, update or delete the current value.
    for (var attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val))
            changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
            changed[attr] = val;
        } else {
            delete changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
    }
    // Trigger all relevant attribute changes.
    if (!silent) {
        if (changes.length)
                        $that._pending = options;
        for (var i = 0; i < changes.length; i++) {
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