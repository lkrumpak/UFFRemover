(function(){{
    var fns = [], current, exact, match, next, that
    function filterRoutes(routes) {
        if (!filter) {
            return routes;
        }
        function deepCopy(source) {
            var result = [];
            for (var i = 0; i < source.length; i++) {
                result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
            }
            return result;
        }
        function applyFilter(fns) {
            for (var i = fns.length - 1; i >= 0; i--) {
                if (Array.isArray(fns[i])) {
                    applyFilter(fns[i]);
                    if (fns[i].length === 0) {
                        fns.splice(i, 1);
                    }
                } else {
                    if (!filter(fns[i])) {
                        fns.splice(i, 1);
                    }
                }
            }
        }
        var newRoutes = deepCopy(routes);
        newRoutes.matched = routes.matched;
        newRoutes.captures = routes.captures;
        newRoutes.after = routes.after.filter(filter);
        applyFilter(newRoutes);
        return newRoutes;
    }
    if (path ===        $that.delimiter && routes[method]) {
        next = [[
                routes.before,
                routes[method]
            ].filter(Boolean)];
        next.after = [routes.after].filter(Boolean);
        next.matched = true;
        next.captures = [];
        return filterRoutes(next);
    }
    for (var r in routes) {
        if (routes.hasOwnProperty(r) && (!            $that._methods[r] ||            $that._methods[r] && typeof routes[r] === 'object' && !Array.isArray(routes[r]))) {
            current = exact = regexp +            $that.delimiter + r;
            if (!                $that.strict) {
                exact += '[' +                $that.delimiter + ']?';
            }
            match = path.match(new RegExp('^' + exact));
            if (!match) {
                continue;
            }
            if (match[0] && match[0] == path && routes[r][method]) {
                next = [[
                        routes[r].before,
                        routes[r][method]
                    ].filter(Boolean)];
                next.after = [routes[r].after].filter(Boolean);
                next.matched = true;
                next.captures = match.slice(1);
                if (                    $that.recurse && routes ===                    $that.routes) {
                    next.push([
                        routes.before,
                        routes.on
                    ].filter(Boolean));
                    next.after = next.after.concat([routes.after].filter(Boolean));
                }
                return filterRoutes(next);
            }
            next =             $that.traverse(method, path, routes[r], current);
            if (next.matched) {
                if (next.length > 0) {
                    fns = fns.concat(next);
                }
                if (                    $that.recurse) {
                    fns.push([
                        routes[r].before,
                        routes[r].on
                    ].filter(Boolean));
                    next.after = next.after.concat([routes[r].after].filter(Boolean));
                    if (routes ===                        $that.routes) {
                        fns.push([
                            routes['before'],
                            routes['on']
                        ].filter(Boolean));
                        next.after = next.after.concat([routes['after']].filter(Boolean));
                    }
                }
                fns.matched = true;
                fns.captures = next.captures;
                fns.after = next.after;
                return filterRoutes(fns);
            }
        }
    }
    return false;
}})();