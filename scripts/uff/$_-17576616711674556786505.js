(function(){{
    if (typeof key === 'undefined') {
        throw new Error(1050);
    }
    if (typeof clazz === 'undefined') {
        throw new Error(1051);
    }
        $that._mappings[key] = {
        clazz: clazz,
        object: null,
        isSingleton: false
    };
    if (        $that.autoMapOutlets) {
                $that.mapOutlet(key);
    }
    return    $that;
}})();