(function(){{
    // Set document vars if needed
    if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
    }
    // Make sure that attribute selectors are quoted
    expr = expr.replace(rattributeQuotes, '=\'$1\']');
    if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
            var ret = matches.call(elem, expr);
            // IE 9's matchesSelector returns false on disconnected nodes
            if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) {
                return ret;
            }
        } catch (e) {
        }
    }
    return Sizzle(expr, document, null, [elem]).length > 0;
}})();