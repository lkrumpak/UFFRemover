(function(){{
    var liveQueries, selector, index;
    liveQueries =     $that._root[    $that._isComponentQuery ? 'liveComponentQueries' : 'liveQueries'];
    selector =     $that.selector;
    index = liveQueries.indexOf(selector);
    if (index !== -1) {
        liveQueries.splice(index, 1);
        liveQueries[selector] = null;
    }
}})();