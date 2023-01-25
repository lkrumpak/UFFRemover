(function(){{
    if (typeof selector === 'object') {
        var widgetTypes = selector;
        for (selector in widgetTypes) {
                        $that.mapWidget(selector, widgetTypes[selector]);
        }
    } else {
                $that.widgetMap[selector] = TWidget;
    }
    return    $that;
}})();