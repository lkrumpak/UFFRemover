(function(){{
    if (element._store.validated || element.key != null) {
        return;
    }
    element._store.validated = true;
    warnAndMonitorForKeyUse('Each child in an array or iterator should have a unique "key" prop.', element, parentType);
}})();