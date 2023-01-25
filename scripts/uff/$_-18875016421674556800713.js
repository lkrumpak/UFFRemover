(function(){{
    var ob = obj.__ob__;
    if (obj._isVue || ob && ob.vmCount) {
        'development' !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
        return;
    }
    if (!hasOwn(obj, key)) {
        return;
    }
    delete obj[key];
    if (!ob) {
        return;
    }
    ob.dep.notify();
}})();