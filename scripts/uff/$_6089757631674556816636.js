(function(){{
    var value;
    if (        $that.evaluating) {
        return        $that;
    }
        $that.evaluating = true;
    try {
        value =         $that.fn.apply(null,         $that.values);
    } catch (err) {
        if (            $that.root.debug) {
            throw err;
        } else {
            value = undefined;
        }
    }
    if (!isEqual(value,         $that.value)) {
        clearCache(        $that.root,         $that.keypath);
                $that.root._cache[        $that.keypath] = value;
        adaptIfNecessary(        $that.root,         $that.keypath, value, true);
                $that.value = value;
        notifyDependants(        $that.root,         $that.keypath);
    }
        $that.evaluating = false;
    return    $that;
}})();