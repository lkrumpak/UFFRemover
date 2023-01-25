(function(){{
    var excess, unquoted = !match[6] && match[2];
    if (matchExpr['CHILD'].test(match[0])) {
        return null;
    }
    // Accept quoted arguments as-is
    if (match[3]) {
        match[2] = match[4] || match[5] || '';    // Strip excess characters from unquoted arguments
    } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(')', unquoted.length - excess) - unquoted.length)) {
        // excess is a negative index
        match[0] = match[0].slice(0, excess);
        match[2] = unquoted.slice(0, excess);
    }
    // Return only captures needed by the pseudo filter method (type and argument)
    return match.slice(0, 3);
}})();