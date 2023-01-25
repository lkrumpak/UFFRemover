(function(){{
    return children && children.filter(function (c) {
        return c && c.componentOptions;
    })[0];
}})();