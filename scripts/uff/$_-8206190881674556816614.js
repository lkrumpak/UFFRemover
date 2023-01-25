(function(){{
    var array, storage, wrappers, instances, index;
    array =     $that.value;
    storage = array._ractive;
    wrappers = storage.wrappers;
    instances = storage.instances;
    if (storage.setting) {
        return false;
    }
    index = wrappers.indexOf(    $that);
    if (index === -1) {
        throw new Error(errorMessage);
    }
    wrappers.splice(index, 1);
    if (!wrappers.length) {
        delete array._ractive;
        unpatchArrayMethods(        $that.value);
    } else {
        instances[        $that.root._guid] -= 1;
        if (!instances[            $that.root._guid]) {
            index = instances.indexOf(            $that.root);
            if (index === -1) {
                throw new Error(errorMessage);
            }
            instances.splice(index, 1);
        }
    }
}})();