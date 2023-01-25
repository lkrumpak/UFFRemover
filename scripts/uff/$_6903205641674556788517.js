(function(){{
    var keys = route.match(/:[^\/]+/g) || [];
    var values = [].slice.call(arguments, 1, -2);
    for (var i = 0, len = keys.length; i < len; i++)
        routeParams[keys[i].replace(/:|\./g, '')] = decodeURIComponent(values[i]);
    m.mount(root, router[route]);
}})();