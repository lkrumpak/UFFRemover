(function(){{
    var i, targets = jQuery(target,         $that), len = targets.length;
    return    $that.filter(function () {
        for (i = 0; i < len; i++) {
            if (jQuery.contains(this, targets[i])) {
                return true;
            }
        }
    });
}})();