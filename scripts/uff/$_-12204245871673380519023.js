(function(){{
    var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
    for (; i <= last; i++) {
        elems = i === last ?         $that :         $that.clone(true);
        jQuery(insert[i])[original](elems);
        // Support: QtWebKit
        // .get() because push.apply(_, arraylike) throws
        push.apply(ret, elems.get());
    }
    return    $that.pushStack(ret);
}})();