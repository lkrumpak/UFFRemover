(function(){{
    var key = type + 'queueHooks';
    return jQuery._data(elem, key) || jQuery._data(elem, key, {
        empty: jQuery.Callbacks('once memory').add(function () {
            jQuery._removeData(elem, type + 'queue');
            jQuery._removeData(elem, key);
        })
    });
}})();