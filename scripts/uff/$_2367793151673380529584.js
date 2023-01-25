(function(){{
    var tmp, count = 1, defer = jQuery.Deferred(), elements =         $that, i =         $that.length, resolve = function () {
            if (!--count) {
                defer.resolveWith(elements, [elements]);
            }
        };
    if (typeof type !== 'string') {
        obj = type;
        type = undefined;
    }
    type = type || 'fx';
    while (i--) {
        tmp = jQuery._data(elements[i], type + 'queueHooks');
        if (tmp && tmp.empty) {
            count++;
            tmp.empty.add(resolve);
        }
    }
    resolve();
    return defer.promise(obj);
}})();