(function(){{
    // Because we're doing `this.get('currentFilter')`, Ractive understands
    // that this function needs to be re-executed reactively when the value of
    // `currentFilter` changes
    var currentFilter =     $that.get('currentFilter');
    if (currentFilter === 'all') {
        return true;
    }
    return filters[currentFilter](item);
}})();