(function(){{
    return 'scopedSlots:{' + Object.keys(slots).map(function (key) {
        return genScopedSlot(key, slots[key]);
    }).join(',') + '}';
}})();