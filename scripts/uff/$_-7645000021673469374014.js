(function(){{
    var b = a.toLowerCase();
    'class' == b && (a = 'className');
    return function (c) {
        return Da ? c.getAttribute(a) : c[a] || c[b];
    };
}})();