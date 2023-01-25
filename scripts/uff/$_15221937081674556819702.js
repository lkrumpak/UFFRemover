(function(){{
    if (typeof type === 'object') {
        var eventTypes = type;
        for (type in eventTypes) {
            //add in view type to limit events created
                        $that.mapChildViewEvent(type, eventTypes[type].callback, eventTypes[type].TView);
        }
    } else {
                $that.childViewEventMap[type] = {
            TView: TView,
            callback: callback
        };
    }
}})();