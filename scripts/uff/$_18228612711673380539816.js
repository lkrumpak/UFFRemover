(function(){{
    if (obj == null)
        return 0;
    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
}})();