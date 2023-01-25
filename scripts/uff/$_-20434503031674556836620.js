(function(){{
    var comparator =     $that.comparator;
    if (!comparator)
        throw new Error('Cannot sort a set without a comparator');
    options || (options = {});
    var length = comparator.length;
    if (_.isFunction(comparator))
        comparator = _.bind(comparator,         $that);
    // Run sort based on type of `comparator`.
    if (length === 1 || _.isString(comparator)) {
                $that.models =         $that.sortBy(comparator);
    } else {
                $that.models.sort(comparator);
    }
    if (!options.silent)
                $that.trigger('sort',         $that, options);
    return    $that;
}})();