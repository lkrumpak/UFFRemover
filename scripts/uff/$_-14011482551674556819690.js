(function(){{
    var attr =         $that.attributes.get(attribute), flags;
    if (typeof attr === 'function') {
        flags =         $that.flags[Model.DO_NOT_COMPUTE];
        return !flags || ArrayUtils.indexOf(flags, attribute) === -1 ? attr.call(        $that) : attr;
    }
    return attr;
}})();