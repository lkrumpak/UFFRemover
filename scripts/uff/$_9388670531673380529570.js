(function(){{
    // No argument, return index in parent
    if (!elem) {
        return        $that[0] &&        $that[0].parentNode ?         $that.first().prevAll().length : -1;
    }
    // index in selector
    if (typeof elem === 'string') {
        return jQuery.inArray(        $that[0], jQuery(elem));
    }
    // Locate the position of the desired element
    return jQuery.inArray(// If it receives a jQuery object, the first element is used
    elem.jquery ? elem[0] : elem,     $that);
}})();