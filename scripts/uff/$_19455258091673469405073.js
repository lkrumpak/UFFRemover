(function(){{
    if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
    } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
    }
}})();