(function(){{
    return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
}})();