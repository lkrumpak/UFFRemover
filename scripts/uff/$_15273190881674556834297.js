(function(){{
    var keys = Object.keys(        $that.items).map(function (string) {
            return Number(string);
        }), closest = getClosest.greaterNumber(id, keys), closestId = keys[closest];
    // Only return if different
    if (closestId != id) {
        return        $that.items[closestId];
    } else {
        return;
    }
}})();