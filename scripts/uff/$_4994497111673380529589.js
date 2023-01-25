(function(){{
    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
    return    $that.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
    });
}})();