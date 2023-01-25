(function(){{
    var error, record;
    if (options == null) {
        options = {};
    }
    if (options.validate !== false) {
        error =         $that.validate();
        if (error) {
                        $that.trigger('error',             $that, error);
            return false;
        }
    }
        $that.trigger('beforeSave',     $that, options);
    record =     $that.isNew() ?     $that.create(options) :     $that.update(options);
        $that.stripCloneAttrs();
        $that.trigger('save', record, options);
    return record;
}})();