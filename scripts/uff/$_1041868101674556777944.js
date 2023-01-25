(function(){{
    var args;
    // if we pass an array as `self` it it means we are coming from
    // the queued request, and we're passing already serialized data
    // self's signature will be: [self, serializedData]
    if (can.isArray(self)) {
        args = self[1];
        self = self[0];
    } else {
        args = self.serialize();
    }
    args = [args];
    var deferred,
        // The model.
        model = self.constructor, jqXHR;
    // `update` and `destroy` need the `id`.
    if (type !== 'create') {
        args.unshift(getId(self));
    }
    jqXHR = model[type].apply(model, args);
    deferred = jqXHR.pipe(function (data) {
        self[method || type + 'd'](data, jqXHR);
        return self;
    });
    // Hook up `abort`
    if (jqXHR.abort) {
        deferred.abort = function () {
            jqXHR.abort();
        };
    }
    deferred.then(success, error);
    return deferred;
}})();