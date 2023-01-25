(function(){{
    var numItems, i;
    numItems =     $that.items.length;
    for (i = 0; i < numItems; i += 1) {
                $that.items[i].teardown();
    }
}})();