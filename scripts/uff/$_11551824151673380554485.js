(function(){{
    var $el = $(item), widgetMap = $el.data('widgets') || {}, widget;
    if (!widgetMap[n]) {
        widget = new o($(item));
        widgetMap[n] = widget;
        cache.set(widget.id, widget);
        $el.data('widgets', widgetMap);
        $el.attr('data-has-widgets', '');
    }
}})();