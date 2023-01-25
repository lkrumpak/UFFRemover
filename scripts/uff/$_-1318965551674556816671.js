(function(){{
    var i, vendor, capped;
    if (!prefixCache[prop]) {
        if (testStyle[prop] !== undefined) {
            prefixCache[prop] = prop;
        } else {
            capped = prop.charAt(0).toUpperCase() + prop.substring(1);
            i = vendors.length;
            while (i--) {
                vendor = vendors[i];
                if (testStyle[vendor + capped] !== undefined) {
                    prefixCache[prop] = vendor + capped;
                    break;
                }
            }
        }
    }
    return prefixCache[prop];
}})();