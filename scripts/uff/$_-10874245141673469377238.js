(function(){{
    if (can.route.currentBinding) {
        can.route._call('unbind');
        can.route.unbind('change', onRouteDataChange);
        can.route.currentBinding = null;
    }
    clearTimeout(timer);
    changingData = 0;
}})();