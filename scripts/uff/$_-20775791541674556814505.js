(function(){{
    if (!options.validate || !        $that.validate)
        return true;
    attrs = _.extend(Object.create(null),     $that.attributes, attrs);
    var error =     $that.validationError =     $that.validate(attrs, options) || null;
    if (!error)
        return true;
        $that.trigger('invalid',     $that, error, _.extend(options, { validationError: error }));
    return false;
}})();