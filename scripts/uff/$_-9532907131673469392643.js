(function(){{
    if (collection == null) {
        return [];
    }
    if (guard && isIterateeCall(iteratees, orders, guard)) {
        orders = undefined;
    }
    if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
    }
    if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
    }
    return baseSortByOrder(collection, iteratees, orders);
}})();