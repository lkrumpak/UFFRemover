(function(){{
    var options = {
        partial: true,
        helpers: helpers,
        partials: partials,
        data: data
    };
    if (partial === undefined) {
        throw new Exception('The partial ' + name + ' could not be found');
    } else if (partial instanceof Function) {
        return partial(context, options);
    }
}})();