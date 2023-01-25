(function(){{
    return instance.helpers['if'].call(    $that, conditional, {
        fn: options.inverse,
        inverse: options.fn,
        hash: options.hash
    });
}})();