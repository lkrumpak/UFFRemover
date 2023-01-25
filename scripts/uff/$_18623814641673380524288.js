(function(){{
    var rename = route, parts = route.split(self.delimiter), routeType = typeof routes[route], isRoute = parts[0] === '' || !self._methods[parts[0]], event = isRoute ? 'on' : rename;
    if (isRoute) {
        rename = rename.slice((rename.match(new RegExp('^' + self.delimiter)) || [''])[0].length);
        parts.shift();
    }
    if (isRoute && routeType === 'object' && !Array.isArray(routes[route])) {
        local = local.concat(parts);
        self.mount(routes[route], local);
        return;
    }
    if (isRoute) {
        local = local.concat(rename.split(self.delimiter));
        local = terminator(local, self.delimiter);
    }
    self.insert(event, local, routes[route]);
}})();