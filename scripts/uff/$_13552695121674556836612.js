(function(){{
    var attrs = attributes || {};
    options || (options = {});
        $that.cid = _.uniqueId(    $that.cidPrefix);
        $that.attributes = {};
    if (options.collection)
                $that.collection = options.collection;
    if (options.parse)
        attrs =         $that.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(    $that, 'defaults'));
        $that.set(attrs, options);
        $that.changed = {};
        $that.initialize.apply(    $that, arguments);
}})();