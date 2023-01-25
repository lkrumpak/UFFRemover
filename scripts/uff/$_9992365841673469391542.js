(function(){{
    var key = type + 'queueHooks';
    return data_priv.get(elem, key) || data_priv.access(elem, key, {
        empty: jQuery.Callbacks('once memory').add(function () {
            data_priv.remove(elem, [
                type + 'queue',
                key
            ]);
        })
    });
}})();