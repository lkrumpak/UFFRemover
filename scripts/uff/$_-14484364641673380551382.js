(function(){{
    var mainTemplate, remaining, partials, name, startMatch, endMatch;
    partials = {};
    mainTemplate = '';
    remaining = template;
    while (startMatch = inlinePartialStart.exec(remaining)) {
        name = startMatch[1];
        mainTemplate += remaining.substr(0, startMatch.index);
        remaining = remaining.substring(startMatch.index + startMatch[0].length);
        endMatch = inlinePartialEnd.exec(remaining);
        if (!endMatch || endMatch[1] !== name) {
            throw new Error('Inline partials must have a closing delimiter, and cannot be nested');
        }
        partials[name] = parse(remaining.substr(0, endMatch.index), options);
        remaining = remaining.substring(endMatch.index + endMatch[0].length);
    }
    return {
        main: parse(mainTemplate, options),
        partials: partials
    };
}})();