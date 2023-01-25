(function(){{
    if (Array.isArray(obj)) {
        obj.length = Math.max(obj.length, key);
        obj.splice(key, 1, val);
        return val;
    }
    if (hasOwn(obj, key)) {
        obj[key] = val;
        return;
    }
    var ob = obj.__ob__;
    if (obj._isVue || ob && ob.vmCount) {
        'development' !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
        return;
    }
    if (!ob) {
        obj[key] = val;
        return;
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val;
}})();