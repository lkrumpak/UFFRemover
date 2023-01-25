(function(){{
    var Klass =     $that;
    if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3, a4, a5);
        return instance;
    } else {
        return new Klass(a1, a2, a3, a4, a5);
    }
}})();