(function(){{
    var isFunction = jQuery.isFunction(html);
    return    $that.each(function (i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
    });
}})();