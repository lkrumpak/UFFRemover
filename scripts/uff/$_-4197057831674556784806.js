(function(){{
    var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function (seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i = '0', unmatched = seed && [], setMatched = [], contextBackup = outermostContext,
                // We must always have either seed elements or outermost context
                elems = seed || byElement && Expr.find['TAG']('*', outermost),
                // Use integer dirruns iff this is the outermost matcher
                dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
                outermostContext = context !== document && context;
            }
            // Add elements passing elementMatchers directly to results
            // Keep `i` a string if there are no elements so `matchedCount` will be "00" below
            // Support: IE<9, Safari
            // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
            for (; i !== len && (elem = elems[i]) != null; i++) {
                if (byElement && elem) {
                    j = 0;
                    while (matcher = elementMatchers[j++]) {
                        if (matcher(elem, context, xml)) {
                            results.push(elem);
                            break;
                        }
                    }
                    if (outermost) {
                        dirruns = dirrunsUnique;
                    }
                }
                // Track unmatched elements for set filters
                if (bySet) {
                    // They will have gone through all possible matchers
                    if (elem = !matcher && elem) {
                        matchedCount--;
                    }
                    // Lengthen the array for every element, matched or not
                    if (seed) {
                        unmatched.push(elem);
                    }
                }
            }
            // Apply set filters to unmatched elements
            matchedCount += i;
            if (bySet && i !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                    matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                    // Reintegrate element matches to eliminate the need for sorting
                    if (matchedCount > 0) {
                        while (i--) {
                            if (!(unmatched[i] || setMatched[i])) {
                                setMatched[i] = pop.call(results);
                            }
                        }
                    }
                    // Discard index placeholder values to get only actual matches
                    setMatched = condense(setMatched);
                }
                // Add matches to results
                push.apply(results, setMatched);
                // Seedless set matches succeeding multiple successful matchers stipulate sorting
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                    Sizzle.uniqueSort(results);
                }
            }
            // Override manipulation of globals by nested matchers
            if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
            }
            return unmatched;
        };
    return bySet ? markFunction(superMatcher) : superMatcher;
}})();