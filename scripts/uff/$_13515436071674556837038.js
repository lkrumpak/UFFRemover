(function(){{
    var local =         $that.localStorage(), itemRe = new RegExp('^' +        $that.name + '-');
    // Remove id-tracking item (e.g., "foo").
    local.removeItem(    $that.name);
    // Match all data items (e.g., "foo-ID") and remove.
    for (var k in local) {
        if (itemRe.test(k)) {
            local.removeItem(k);
        }
    }
        $that.records.length = 0;
}})();