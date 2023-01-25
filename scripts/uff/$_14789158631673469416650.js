(function(){{
    var liveQueries, query;
    options = options || {};
    liveQueries =     $that._liveComponentQueries;
    if (query = liveQueries[selector]) {
        return options && options.live ? query : query.slice();
    }
    query = makeQuery(    $that, selector, !!options.live, true);
    if (query.live) {
        liveQueries.push(selector);
        liveQueries[selector] = query;
    }
        $that.fragment.findAllComponents(selector, query);
    return query;
}})();