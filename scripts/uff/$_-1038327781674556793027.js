(function(){{
    var Ctor = object.constructor;
    if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
        Ctor = Object;
    }
    return new Ctor();
}})();