(function(){{
    return can.each(items, function (item) {
        if (item && item.unbind) {
            can.stopListening.call(parent, item, 'change');
        }
    });
}})();