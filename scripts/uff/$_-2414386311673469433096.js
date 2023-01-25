(function(){{
    var path = window.location.pathname;
    if (path.substr(0, 1) !== '/') {
        path = '/' + path;
    }
    return path;
}})();