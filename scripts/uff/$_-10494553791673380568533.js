(function(){{
    assert(typeof base != 'object', 'the first object to compare with shallowDiff needs to be an object');
    assert(typeof compared != 'object', 'the second object to compare with shallowDiff needs to be an object');
    var unchanged = [], updated = [], deleted = [], added = [];
    // Loop through the compared object
    loop(compared, function (value, idx) {
        // To get the added items
        if (!(idx in base)) {
            added.push(idx);    // The updated items
        } else if (value !== base[idx]) {
            updated.push(idx);    // And the unchanged
        } else if (value === base[idx]) {
            unchanged.push(idx);
        }
    });
    // Loop through the before object
    loop(base, function (value, idx) {
        // To get the deleted items
        if (!(idx in compared)) {
            deleted.push(idx);
        }
    });
    return {
        updated: updated,
        unchanged: unchanged,
        added: added,
        deleted: deleted
    };
}})();