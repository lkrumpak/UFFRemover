(function(){{
    var elem, i = 0;
    for (; (elem =         $that[i]) != null; i++) {
        if (elem.nodeType === 1) {
            // Prevent memory leaks
            jQuery.cleanData(getAll(elem, false));
            // Remove any remaining nodes
            elem.textContent = '';
        }
    }
    return    $that;
}})();