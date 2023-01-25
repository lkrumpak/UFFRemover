(function(){{
    if (!diff)
        return        $that.hasChanged() ? _.clone(        $that.changed) : false;
    var old =     $that._changing ?     $that._previousAttributes :     $that.attributes;
    var changed = {};
    for (var attr in diff) {
        var val = diff[attr];
        if (_.isEqual(old[attr], val))
            continue;
        changed[attr] = val;
    }
    return _.size(changed) ? changed : false;
}})();