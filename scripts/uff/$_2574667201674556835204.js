(function(){{
    if (list) {
        jQuery.each(arguments, function (_, arg) {
            var index;
            while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                // Handle firing indexes
                if (firing) {
                    if (index <= firingLength) {
                        firingLength--;
                    }
                    if (index <= firingIndex) {
                        firingIndex--;
                    }
                }
            }
        });
    }
    return    $that;
}})();