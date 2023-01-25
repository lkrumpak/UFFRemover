(function(){{
    var match, elem, m, nodeType,
        // QSA vars
        i, groups, old, nid, newContext, newSelector;
    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
        setDocument(context);
    }
    context = context || document;
    results = results || [];
    nodeType = context.nodeType;
    if (typeof selector !== 'string' || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
    }
    if (!seed && documentIsHTML) {
        // Try to shortcut find operations when possible (e.g., not under DocumentFragment)
        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // Speed-up: Sizzle("#ID")
            if (m = match[1]) {
                if (nodeType === 9) {
                    elem = context.getElementById(m);
                    // Check parentNode to catch when Blackberry 4.6 returns
                    // nodes that are no longer in the document (jQuery #6963)
                    if (elem && elem.parentNode) {
                        // Handle the case where IE, Opera, and Webkit return items
                        // by name instead of ID
                        if (elem.id === m) {
                            results.push(elem);
                            return results;
                        }
                    } else {
                        return results;
                    }
                } else {
                    // Context is not a document
                    if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                        results.push(elem);
                        return results;
                    }
                }    // Speed-up: Sizzle("TAG")
            } else if (match[2]) {
                push.apply(results, context.getElementsByTagName(selector));
                return results;    // Speed-up: Sizzle(".CLASS")
            } else if ((m = match[3]) && support.getElementsByClassName) {
                push.apply(results, context.getElementsByClassName(m));
                return results;
            }
        }
        // QSA path
        if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            nid = old = expando;
            newContext = context;
            newSelector = nodeType !== 1 && selector;
            // qSA works strangely on Element-rooted queries
            // We can work around this by specifying an extra ID on the root
            // and working up from there (Thanks to Andrew Dupont for the technique)
            // IE 8 doesn't work on object elements
            if (nodeType === 1 && context.nodeName.toLowerCase() !== 'object') {
                groups = tokenize(selector);
                if (old = context.getAttribute('id')) {
                    nid = old.replace(rescape, '\\$&');
                } else {
                    context.setAttribute('id', nid);
                }
                nid = '[id=\'' + nid + '\'] ';
                i = groups.length;
                while (i--) {
                    groups[i] = nid + toSelector(groups[i]);
                }
                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                newSelector = groups.join(',');
            }
            if (newSelector) {
                try {
                    push.apply(results, newContext.querySelectorAll(newSelector));
                    return results;
                } catch (qsaError) {
                } finally {
                    if (!old) {
                        context.removeAttribute('id');
                    }
                }
            }
        }
    }
    // All others
    return select(selector.replace(rtrim, '$1'), context, results, seed);
}})();