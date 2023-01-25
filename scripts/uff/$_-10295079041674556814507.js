(function(){{
    if (attrs instanceof Model)
        return attrs;
    options = _.extend({}, options);
    options.collection =     $that;
    var model = new    $that.model(attrs, options);
    if (!model.validationError)
        return model;
        $that.trigger('invalid',     $that, model.validationError, options);
    return false;
}})();