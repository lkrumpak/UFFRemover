(function(){{
    var i, item, containsInterpolator;
    if (        $that.simple !== undefined) {
        return        $that.simple;
    }
    i =     $that.items.length;
    while (i--) {
        item =         $that.items[i];
        if (item.type === types.TEXT) {
            continue;
        }
        if (item.type === types.INTERPOLATOR) {
            if (containsInterpolator) {
                return false;
            } else {
                containsInterpolator = true;
                continue;
            }
        }
        return        $that.simple = false;
    }
    return    $that.simple = true;
}})();