(function(){{
    var items =     $that.get('items');
    var i = items.length;
    while (i--) {
        if (items[i].completed) {
            items.splice(i, 1);
        }
    }
}})();