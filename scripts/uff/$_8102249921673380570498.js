(function(){{
    if (n == null || guard) {
        if (!isArrayLike(obj))
            obj = _.values(obj);
        return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
}})();