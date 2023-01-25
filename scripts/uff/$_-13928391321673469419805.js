(function(){{
    var promise = new Promise(        $that), attributes =         $that.toObject(), changedAttributes = {}, i = -1, attribute, result;
    while (!!(attribute =         $that.unsavedAttributes[++i])) {
        changedAttributes[attribute] = attributes[attribute];
    }
    promise.success(function (value) {
        var idAttribute = this.idAttribute;
        if (this.isNew() && value[idAttribute] !== UNDEFINED) {
            this.set(idAttribute, value[idAttribute]);
        }
        this.unsavedAttributes = [];
        this.trigger('saveSuccess', { response: value });
    }).error(function (value) {
        this.trigger('saveError', { response: value });
    });
    result = callback.call(thisp ||    $that,     $that, changedAttributes, attributes);
    if (result instanceof Promise) {
        promise.when(result);
    } else if (result) {
        promise.resolve(result);
    } else {
        promise.reject(result);
    }
    return promise;
}})();