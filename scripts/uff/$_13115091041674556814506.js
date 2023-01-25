(function(){{
    if (!        $that.comparator)
        throw new Error('Cannot sort a set without a comparator');
    options || (options = {});
    // Run sort based on type of `comparator`.
    if (typeof        $that.comparator === 'string' ||        $that.comparator.length === 1) {
                $that.models =         $that.sortBy(        $that.comparator,         $that);
    } else {
                $that.models.sort(        $that.comparator.bind(        $that));
    }
    if (!options.silent)
                $that.trigger('sort',         $that, options);
    return    $that;
}})();