(function(){{
    if (typeof state === 'boolean') {
        return state ?         $that.show() :         $that.hide();
    }
    return    $that.each(function () {
        if (isHidden(this)) {
            jQuery(this).show();
        } else {
            jQuery(this).hide();
        }
    });
}})();