(function(){{
    var liveQueries, query;
    if (!        $that.el) {
        return [];
    }
    options = options || {};
    liveQueries =     $that._liveQueries;
    if (query = liveQueries[selector]) {
        return options && options.live ? query : query.slice();
    }
    query = makeQuery(    $that, selector, !!options.live, false);
    if (query.live) {
        liveQueries.push(selector);
        liveQueries[selector] = query;
    }
        $that.fragment.findAll(selector, query);
    return query;
}})();