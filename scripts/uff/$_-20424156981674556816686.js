(function(){{
    var i, len, item;
    if (        $that.items) {
        len =         $that.items.length;
        for (i = 0; i < len; i += 1) {
            item =             $that.items[i];
            if (item.findAllComponents) {
                item.findAllComponents(selector, query);
            }
        }
    }
    return query;
}})();