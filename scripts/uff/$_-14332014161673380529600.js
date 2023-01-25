(function(){{
    var parent = elem.parentNode;
    if (parent) {
        parent.selectedIndex;
        // Make sure that it also works with optgroups, see #5701
        if (parent.parentNode) {
            parent.parentNode.selectedIndex;
        }
    }
    return null;
}})();