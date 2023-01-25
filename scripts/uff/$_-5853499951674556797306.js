(function(){{
    var args, lastArg, options, path, routes;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    options = {};
    lastArg = args[args.length - 1];
    if (typeof lastArg === 'object') {
        options = args.pop();
    } else if (typeof lastArg === 'boolean') {
        options.trigger = args.pop();
    }
    options = $.extend({},     $that.options, options);
    path = args.join('/');
    if (        $that.path === path) {
        return;
    }
        $that.path = path;
    if (options.trigger) {
                $that.trigger('navigate',         $that.path);
        routes =         $that.matchRoutes(        $that.path, options);
        if (!routes.length) {
            if (typeof options.redirect === 'function') {
                return options.redirect.apply(                $that, [
                                        $that.path,
                    options
                ]);
            } else {
                if (options.redirect === true) {
                                        $that.redirect(                    $that.path);
                }
            }
        }
    }
    if (options.shim) {
        return true;
    } else if (        $that.history && options.replace) {
        return history.replaceState({}, document.title,         $that.path);
    } else if (        $that.history) {
        return history.pushState({}, document.title,         $that.path);
    } else {
        return window.location.hash =         $that.path;
    }
}})();