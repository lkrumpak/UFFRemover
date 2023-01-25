(function(){{
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
        results[i] = _.pluck(arguments, '' + i);
    }
    return results;
}})();