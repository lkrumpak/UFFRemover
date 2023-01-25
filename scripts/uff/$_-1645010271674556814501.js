(function(){{
    if (!diff)
        return        $that.hasChanged() ? _.extend(Object.create(null),         $that.changed) : false;
    var val, changed = false;
    var old =     $that._changing ?     $that._previousAttributes :     $that.attributes;
    for (var attr in diff) {
        if (_.isEqual(old[attr], val = diff[attr]))
            continue;
        (changed || (changed = {}))[attr] = val;
    }
    return changed;
}})();