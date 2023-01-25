(function(){{
    prev = prev || {};
    next = next || {};
    function getValueForKey(key) {
        if (next.hasOwnProperty(key)) {
            return next[key];
        } else {
            return prev[key];
        }
    }
    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = {};
    var pendingKeys = [];
    for (var prevKey in prev) {
        if (next.hasOwnProperty(prevKey)) {
            if (pendingKeys.length) {
                nextKeysPending[prevKey] = pendingKeys;
                pendingKeys = [];
            }
        } else {
            pendingKeys.push(prevKey);
        }
    }
    var i;
    var childMapping = {};
    for (var nextKey in next) {
        if (nextKeysPending.hasOwnProperty(nextKey)) {
            for (i = 0; i < nextKeysPending[nextKey].length; i++) {
                var pendingNextKey = nextKeysPending[nextKey][i];
                childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
            }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
    }
    // Finally, add the keys which didn't appear before any key in `next`
    for (i = 0; i < pendingKeys.length; i++) {
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
}})();