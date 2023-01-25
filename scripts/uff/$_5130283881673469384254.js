(function(){{
    // Can use an empty set, since event contains the info
    jQuery().off(event);
    return origFn.apply(    $that, arguments);
}})();