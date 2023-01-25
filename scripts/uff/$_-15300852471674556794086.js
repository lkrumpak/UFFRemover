(function(){{
    if (        $that._isModel(attrs)) {
        if (!attrs.collection)
            attrs.collection =             $that;
        return attrs;
    }
    options = options ? _.clone(options) : {};
    options.collection =     $that;
    var model = new    $that.model(attrs, options);
    if (!model.validationError)
        return model;
        $that.trigger('invalid',     $that, model.validationError, options);
    return false;
}})();