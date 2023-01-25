(function(){{
    var i, len =         $that.length, ret = [], self =         $that;
    if (typeof selector !== 'string') {
        return        $that.pushStack(jQuery(selector).filter(function () {
            for (i = 0; i < len; i++) {
                if (jQuery.contains(self[i], this)) {
                    return true;
                }
            }
        }));
    }
    for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
    }
    // Needed because $( selector, context ) becomes $( context ).find( selector )
    ret =     $that.pushStack(len > 1 ? jQuery.unique(ret) : ret);
    ret.selector =     $that.selector ?     $that.selector + ' ' + selector : selector;
    return ret;
}})();