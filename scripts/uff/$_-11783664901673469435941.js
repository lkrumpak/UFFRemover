(function(){{
    if (!(callingContext instanceof boundFunc))
        return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result))
        return result;
    return self;
}})();