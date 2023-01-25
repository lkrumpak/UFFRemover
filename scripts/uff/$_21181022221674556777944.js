(function(){{
    el = can.$(el);
    if (attr) {
        return can.data(el, 'scope').attr(attr);
    } else {
        return can.data(el, 'scope');
    }
}})();