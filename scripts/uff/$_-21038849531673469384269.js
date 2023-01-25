(function(){{
    if (jQuery.isFunction(html)) {
        return        $that.each(function (i) {
            jQuery(this).wrapInner(html.call(this, i));
        });
    }
    return    $that.each(function () {
        var self = jQuery(this), contents = self.contents();
        if (contents.length) {
            contents.wrapAll(html);
        } else {
            self.append(html);
        }
    });
}})();