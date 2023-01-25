(function(){{
    if (attr == null)
        return !_.isEmpty(        $that.changed);
    return _.has(    $that.changed, attr);
}})();