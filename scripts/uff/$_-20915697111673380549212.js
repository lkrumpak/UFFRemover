(function(){{
    var attrs = {};
    for (var key in        $that.attributes)
        attrs[key] = void 0;
    return    $that.set(attrs, _.extend({}, options, { unset: true }));
}})();