(function(){{
    return    $that.parent().each(function () {
        if (!jQuery.nodeName(this, 'body')) {
            jQuery(this).replaceWith(this.childNodes);
        }
    }).end();
}})();