(function(){{
    if (obj instanceof _)
        return obj;
    if (!(        $that instanceof _))
        return new _(obj);
        $that._wrapped = obj;
}})();