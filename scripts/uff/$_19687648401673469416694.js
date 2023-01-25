(function(){{
    var len, i, item, queryResult;
    if (        $that.items) {
        len =         $that.items.length;
        for (i = 0; i < len; i += 1) {
            item =             $that.items[i];
            if (item.findComponent && (queryResult = item.findComponent(selector))) {
                return queryResult;
            }
        }
        return null;
    }
}})();