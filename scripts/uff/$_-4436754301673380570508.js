(function(){{
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++)
        accum[i] = iteratee(i);
    return accum;
}})();