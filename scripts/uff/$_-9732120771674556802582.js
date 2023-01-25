(function(){{
    // Build a new jQuery matched element set
    var ret = jQuery.merge(    $that.constructor(), elems);
    // Add the old object onto the stack (as a reference)
    ret.prevObject =     $that;
    ret.context =     $that.context;
    // Return the newly-formed element set
    return ret;
}})();