(function(){{
    if (jQuery.isArray(value)) {
        return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
    }
}})();