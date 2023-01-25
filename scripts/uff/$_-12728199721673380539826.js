(function(){{
    if (!diff)
        return        $that.hasChanged() ? _.clone(        $that._changed) : false;
    var val, changed = false;
    var old =     $that._changing ?     $that._previousAttributes :     $that.attributes;
    var def, isEqual;
    for (var attr in diff) {
        def =         $that._definition[attr];
        isEqual =         $that._getCompareForType(def && def.type);
        if (isEqual(old[attr], val = diff[attr]))
            continue;
        (changed || (changed = {}))[attr] = val;
    }
    return changed;
}})();