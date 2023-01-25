(function(){{
    // No argument, return index in parent
    if (!elem) {
        return        $that[0] &&        $that[0].parentNode ?         $that.first().prevAll().length : -1;
    }
    // Index in selector
    if (typeof elem === 'string') {
        return indexOf.call(jQuery(elem),         $that[0]);
    }
    // Locate the position of the desired element
    return indexOf.call(    $that, // If it receives a jQuery object, the first element is used
    elem.jquery ? elem[0] : elem);
}})();