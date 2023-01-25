(function(){{
    var simple = type.slice(0, 3) !== 'nth', forward = type.slice(-4) !== 'last', ofType = what === 'of-type';
    return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
    function (elem) {
        return !!elem.parentNode;
    } : function (elem, context, xml) {
        var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? 'nextSibling' : 'previousSibling', parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
        if (parent) {
            // :(first|last|only)-(child|of-type)
            if (simple) {
                while (dir) {
                    node = elem;
                    while (node = node[dir]) {
                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                            return false;
                        }
                    }
                    // Reverse direction for :only-* (if we haven't yet done so)
                    start = dir = type === 'only' && !start && 'nextSibling';
                }
                return true;
            }
            start = [forward ? parent.firstChild : parent.lastChild];
            // non-xml :nth-child(...) stores cache data on `parent`
            if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                outerCache = parent[expando] || (parent[expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = cache[0] === dirruns && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    // When found, cache indexes on `parent` and break
                    if (node.nodeType === 1 && ++diff && node === elem) {
                        outerCache[type] = [
                            dirruns,
                            nodeIndex,
                            diff
                        ];
                        break;
                    }
                }    // Use previously-cached element index if available
            } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                diff = cache[1];    // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
            } else {
                // Use the same loop as above to seek `elem` from the start
                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                        // Cache the index of each encountered element
                        if (useCache) {
                            (node[expando] || (node[expando] = {}))[type] = [
                                dirruns,
                                diff
                            ];
                        }
                        if (node === elem) {
                            break;
                        }
                    }
                }
            }
            // Incorporate the offset, then check against cycle size
            diff -= last;
            return diff === first || diff % first === 0 && diff / first >= 0;
        }
    };
}})();