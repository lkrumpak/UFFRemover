(function(){{
    var wrapper =         $that, keys, prop, objKeypath, descriptor, wrappers, oldGet, oldSet, get, set;
        $that.ractive = ractive;
        $that.keypath = keypath;
    keys = keypath.split('.');
        $that.prop = keys.pop();
    objKeypath = keys.join('.');
        $that.obj = objKeypath ? ractive.get(objKeypath) : ractive.data;
    descriptor =     $that.originalDescriptor = Object.getOwnPropertyDescriptor(    $that.obj,     $that.prop);
    if (descriptor && descriptor.set && (wrappers = descriptor.set._ractiveWrappers)) {
        if (wrappers.indexOf(            $that) === -1) {
            wrappers.push(            $that);
        }
        return;
    }
    if (descriptor && !descriptor.configurable) {
        throw new Error('Cannot use magic mode with property "' + prop + '" - object is not configurable');
    }
    if (descriptor) {
                $that.value = descriptor.value;
        oldGet = descriptor.get;
        oldSet = descriptor.set;
    }
    get = oldGet || function () {
        return wrapper.value;
    };
    set = function (value) {
        var wrappers, wrapper, i;
        if (oldSet) {
            oldSet(value);
        }
        wrappers = set._ractiveWrappers;
        i = wrappers.length;
        while (i--) {
            wrapper = wrappers[i];
            if (!wrapper.resetting) {
                wrapper.ractive.set(wrapper.keypath, value);
            }
        }
    };
    set._ractiveWrappers = [        $that];
    Object.defineProperty(    $that.obj,     $that.prop, {
        get: get,
        set: set,
        enumerable: true,
        configurable: true
    });
}})();