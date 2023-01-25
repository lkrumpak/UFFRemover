(function(){{
    var len = Math.min(items.length,     $that.length);
    for (var prop = 0; prop < len; prop++) {
        var curVal =             $that[prop], newVal = items[prop];
        if (Map.helpers.canMakeObserve(curVal) && Map.helpers.canMakeObserve(newVal)) {
            curVal.attr(newVal, remove);    //changed from a coercion to an explicit
        } else if (curVal !== newVal) {
                        $that._set(prop, newVal);
        } else {
        }
    }
    if (items.length >        $that.length) {
        // Add in the remaining props.
                $that.push.apply(        $that, items.slice(        $that.length));
    } else if (items.length <        $that.length && remove) {
                $that.splice(items.length);
    }
}})();