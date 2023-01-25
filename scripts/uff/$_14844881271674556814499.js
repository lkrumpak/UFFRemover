(function(){{
    if (attr == null)
        return !!Object.keys(        $that.changed).length;
    return _.has(    $that.changed, attr);
}})();