(function(){{
    if (!_.isObject(prototype))
        return {};
    if (nativeCreate)
        return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor();
    Ctor.prototype = null;
    return result;
}})();