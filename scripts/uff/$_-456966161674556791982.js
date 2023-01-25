(function(){{
    var parent = elem.parentNode;
    return parent && parent.nodeType !== 11 ? parent : null;
}})();