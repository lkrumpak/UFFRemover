(function(){{
    var self =     $that;
    if (!route && typeof path == 'function') {
        route = path;
        path = method;
        method = 'on';
    }
    if (Array.isArray(path)) {
        return path.forEach(function (p) {
            self.on(method, p, route);
        });
    }
    if (path.source) {
        path = path.source.replace(/\\\//ig, '/');
    }
    if (Array.isArray(method)) {
        return method.forEach(function (m) {
            self.on(m.toLowerCase(), path, route);
        });
    }
    path = path.split(new RegExp(    $that.delimiter));
    path = terminator(path,     $that.delimiter);
        $that.insert(method,     $that.scope.concat(path), route);
}})();