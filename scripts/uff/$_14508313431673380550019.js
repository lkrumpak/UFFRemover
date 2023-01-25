(function(){{
    // Use querySelectorAll to find all elements matching the selector,
    // then check if the given element is included in that list.
    // Executing the query on the parentNode reduces the resulting nodeList,
    // (document doesn't have a parentNode).
    var nodeList = (    $that.parentNode || document).querySelectorAll(selector) || [];
    return !!~indexOf(nodeList,     $that);
}})();