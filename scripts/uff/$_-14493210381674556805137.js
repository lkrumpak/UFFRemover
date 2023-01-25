(function(){{
    var parent = checkYoSelf ? element : element.parentNode;
    while (parent && parent !== document) {
        if (matches(parent, selector))
            return parent;
        parent = parent.parentNode;
    }
}})();