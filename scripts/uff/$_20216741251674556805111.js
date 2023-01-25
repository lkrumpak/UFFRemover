(function(){{
    if (attr == null)
        return !_.isEmpty(        $that._changed);
    return _.has(    $that._changed, attr);
}})();