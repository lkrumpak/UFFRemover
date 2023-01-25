(function(){{
    var results = [];
    results['ids'] = [];
        $that.each(function (prop, value) {
        results.push(typeof value.toObject === 'function' ? value.toObject() : value);
        results['ids'].push(prop);
    });
    return results;
}})();