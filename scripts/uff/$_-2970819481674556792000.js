(function(){{
    var data, elem, type, key, special = jQuery.event.special, i = 0;
    for (; (elem = elems[i]) !== undefined; i++) {
        if (jQuery.acceptData(elem)) {
            key = elem[data_priv.expando];
            if (key && (data = data_priv.cache[key])) {
                if (data.events) {
                    for (type in data.events) {
                        if (special[type]) {
                            jQuery.event.remove(elem, type);    // This is a shortcut to avoid jQuery.event.remove's overhead
                        } else {
                            jQuery.removeEvent(elem, type, data.handle);
                        }
                    }
                }
                if (data_priv.cache[key]) {
                    // Discard any remaining `private` data
                    delete data_priv.cache[key];
                }
            }
        }
        // Discard any remaining `user` data
        delete data_user.cache[elem[data_user.expando]];
    }
}})();