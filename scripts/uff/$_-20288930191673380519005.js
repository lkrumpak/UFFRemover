(function(){{
    var targets = jQuery(target,         $that), l = targets.length;
    return    $that.filter(function () {
        var i = 0;
        for (; i < l; i++) {
            if (jQuery.contains(this, targets[i])) {
                return true;
            }
        }
    });
}})();