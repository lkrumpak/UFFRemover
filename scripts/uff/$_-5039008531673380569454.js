(function(){{
    var val = jQuery.find.attr(elem, 'value');
    return val != null ? val : // Support: IE10-11+
    // option.text throws exceptions (#14686, #14858)
    jQuery.trim(jQuery.text(elem));
}})();