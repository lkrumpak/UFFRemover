(function(){{
    var memo = {};
    hasher || (hasher = _.identity);
    return function () {
        var key = hasher.apply(this, arguments);
        return _.has(memo, key) ? memo[key] : memo[key] = func.apply(this, arguments);
    };
}})();