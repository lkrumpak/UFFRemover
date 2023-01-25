(function(){{
    // if we haven't defined a constructor, skip this
    if (!        $that.model)
        return attrs;
    if (        $that.isModel(attrs)) {
        if (!attrs.collection)
            attrs.collection =             $that;
        return attrs;
    } else {
        options = options ? extend({}, options) : {};
        options.collection =         $that;
        var model = new        $that.model(attrs, options);
        if (!model.validationError)
            return model;
                $that.trigger('invalid',         $that, model.validationError, options);
        return false;
    }
}})();