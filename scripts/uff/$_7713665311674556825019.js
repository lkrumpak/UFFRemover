(function(){{
    var isAbsolute = exports.isAbsolute(path), trailingSlash = substr(path, -1) === '/';
    // Normalize the path
    path = normalizeArray(filter(path.split('/'), function (p) {
        return !!p;
    }), !isAbsolute).join('/');
    if (!path && !isAbsolute) {
        path = '.';
    }
    if (path && trailingSlash) {
        path += '/';
    }
    return (isAbsolute ? '/' : '') + path;
}})();