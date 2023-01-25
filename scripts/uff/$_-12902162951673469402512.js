(function(){{
    var ret = results || [];
    if (arr != null) {
        if (isArraylike(Object(arr))) {
            jQuery.merge(ret, typeof arr === 'string' ? [arr] : arr);
        } else {
            push.call(ret, arr);
        }
    }
    return ret;
}})();