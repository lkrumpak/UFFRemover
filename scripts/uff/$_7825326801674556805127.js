(function(){{
    // conditions under which we should re-run filters
    if (_.contains(        $that._watched, eventName.split(':')[1]) || _.contains([
            'add',
            'remove',
            'reset',
            'sync'
        ], eventName)) {
                $that._runFilters();
    }
    // conditions under which we should proxy the events
    if ((_.contains([
            'sync',
            'invalid',
            'destroy'
        ]) || eventName.indexOf('change') !== -1) &&        $that.contains(model)) {
                $that.trigger.apply(        $that, arguments);
    }
}})();