(function(){{
    var dir = combinator.dir, checkNonElements = base && dir === 'parentNode', doneName = done++;
    return combinator.first ? // Check against closest ancestor/preceding element
    function (elem, context, xml) {
        while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
                return matcher(elem, context, xml);
            }
        }
    } : // Check against all ancestor/preceding elements
    function (elem, context, xml) {
        var oldCache, outerCache, newCache = [
                dirruns,
                doneName
            ];
        // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
        if (xml) {
            while (elem = elem[dir]) {
                if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                        return true;
                    }
                }
            }
        } else {
            while (elem = elem[dir]) {
                if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                        // Assign to newCache so results back-propagate to previous elements
                        return newCache[2] = oldCache[2];
                    } else {
                        // Reuse newcache so results back-propagate to previous elements
                        outerCache[dir] = newCache;
                        // A match means we're done; a fail means we have to keep checking
                        if (newCache[2] = matcher(elem, context, xml)) {
                            return true;
                        }
                    }
                }
            }
        }
    };
}})();