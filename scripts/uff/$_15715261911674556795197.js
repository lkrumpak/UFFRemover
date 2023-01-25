(function(){{
    var i, tokens, token, type, find, compiled = typeof selector === 'function' && selector, match = !seed && tokenize(selector = compiled.selector || selector);
    results = results || [];
    // Try to minimize operations if there is no seed and only one group
    if (match.length === 1) {
        // Take a shortcut and set the context if the root selector is an ID
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === 'ID' && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
            context = (Expr.find['ID'](token.matches[0].replace(runescape, funescape), context) || [])[0];
            if (!context) {
                return results;    // Precompiled matchers will still verify ancestry, so step up a level
            } else if (compiled) {
                context = context.parentNode;
            }
            selector = selector.slice(tokens.shift().value.length);
        }
        // Fetch a seed set for right-to-left matching
        i = matchExpr['needsContext'].test(selector) ? 0 : tokens.length;
        while (i--) {
            token = tokens[i];
            // Abort if we hit a combinator
            if (Expr.relative[type = token.type]) {
                break;
            }
            if (find = Expr.find[type]) {
                // Search, expanding context for leading sibling combinators
                if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                    // If seed is empty or no tokens remain, we can return early
                    tokens.splice(i, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                        push.apply(results, seed);
                        return results;
                    }
                    break;
                }
            }
        }
    }
    // Compile and execute a filtering function if one is not provided
    // Provide `match` to avoid retokenization if we modified the selector above
    (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
    return results;
}})();