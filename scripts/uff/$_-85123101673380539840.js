(function(){{
    if (!(        $that instanceof bound))
        return func.apply(context, args.concat(slice.call(arguments)));
    Ctor.prototype = func.prototype;
    var self = new Ctor();
    Ctor.prototype = null;
    var result = func.apply(self, args.concat(slice.call(arguments)));
    if (_.isObject(result))
        return result;
    return self;
}})();