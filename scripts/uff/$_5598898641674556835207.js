(function(){{
    var queue;
    if (elem) {
        type = (type || 'fx') + 'queue';
        queue = data_priv.get(elem, type);
        // Speed up dequeue by getting out quickly if this is just a lookup
        if (data) {
            if (!queue || jQuery.isArray(data)) {
                queue = data_priv.access(elem, type, jQuery.makeArray(data));
            } else {
                queue.push(data);
            }
        }
        return queue || [];
    }
}})();