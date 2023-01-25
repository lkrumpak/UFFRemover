(function(){{
    var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + ' '];
    if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
            match = tokenize(selector);
        }
        i = match.length;
        while (i--) {
            cached = matcherFromTokens(match[i]);
            if (cached[expando]) {
                setMatchers.push(cached);
            } else {
                elementMatchers.push(cached);
            }
        }
        // Cache the compiled function
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
        // Save selector and tokenization
        cached.selector = selector;
    }
    return cached;
}})();