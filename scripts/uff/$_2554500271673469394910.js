(function(){{
    var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1;
    for (; i <= last; i++) {
        elems = i === last ?         $that :         $that.clone(true);
        jQuery(insert[i])[original](elems);
        // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
        push.apply(ret, elems.get());
    }
    return    $that.pushStack(ret);
}})();