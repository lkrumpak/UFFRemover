(function(){{
    while (data && depth--) {
        data = data._parent;
    }
    return data;
}})();