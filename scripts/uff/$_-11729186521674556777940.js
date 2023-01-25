(function(){{
    // TOOD: clean up the following
    // If there is a "partial" property and there is not
    // an already-cached partial, we use the value of the 
    // property to look up the partial
    // if this partial is not cached ...
    if (!can.view.cached[partial]) {
        // we don't want to bind to changes so clear and restore reading
        var reads = can.__clearReading && can.__clearReading();
        if (scope.attr('partial')) {
            partial = scope.attr('partial');
        }
        if (can.__setReading) {
            can.__setReading(reads);
        }
    }
    // Call into `can.view.render` passing the
    // partial and scope.
    return can.view.render(partial, scope);
}})();