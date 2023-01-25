(function(){{
    var wrap;
    if (jQuery.isFunction(html)) {
        return        $that.each(function (i) {
            jQuery(this).wrapAll(html.call(this, i));
        });
    }
    if (        $that[0]) {
        // The elements to wrap the target around
        wrap = jQuery(html,         $that[0].ownerDocument).eq(0).clone(true);
        if (            $that[0].parentNode) {
            wrap.insertBefore(            $that[0]);
        }
        wrap.map(function () {
            var elem = this;
            while (elem.firstElementChild) {
                elem = elem.firstElementChild;
            }
            return elem;
        }).append(        $that);
    }
    return    $that;
}})();