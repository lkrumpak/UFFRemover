(function(){{
    return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
}})();