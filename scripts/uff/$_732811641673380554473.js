(function(){{
    var item = $(        $that), src = item.attr('data-src'), name = item.attr('data-name'), isDefault = typeof item.attr('data-default') === 'string', code = item.text(), map;
    map = construct(name, src, code);
    cache.set(map.name, map);
    if (isDefault) {
        Map.setDefault(cache, name);
    }
}})();