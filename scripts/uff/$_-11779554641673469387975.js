(function(){{
    var deferred = new Deferred();
    deferred.promise = propify(deferred.promise);
    return deferred;
}})();