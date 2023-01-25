(function(){{
    if (window.$ === jQuery) {
        window.$ = _$;
    }
    if (deep && window.jQuery === jQuery) {
        window.jQuery = _jQuery;
    }
    return jQuery;
}})();