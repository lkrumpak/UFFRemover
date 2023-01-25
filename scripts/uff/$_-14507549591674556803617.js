(function(){{
    if (logger.level <= level) {
        var method = logger.methodMap[level];
        if (typeof console !== 'undefined' && console[method]) {
            console[method].call(console, message);
        }
    }
}})();