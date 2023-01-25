(function(){{
    var descriptor, set, value, wrappers;
    descriptor = Object.getOwnPropertyDescriptor(    $that.obj,     $that.prop);
    set = descriptor.set;
    wrappers = set._ractiveWrappers;
    wrappers.splice(wrappers.indexOf(    $that), 1);
    if (!wrappers.length) {
        value =         $that.obj[        $that.prop];
        Object.defineProperty(        $that.obj,         $that.prop,         $that.originalDescriptor || {
            writable: true,
            enumerable: true,
            configrable: true
        });
                $that.obj[        $that.prop] = value;
    }
}})();