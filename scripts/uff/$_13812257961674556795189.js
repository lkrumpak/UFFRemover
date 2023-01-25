(function(){{
    match[1] = match[1].replace(runescape, funescape);
    // Move the given value to match[3] whether quoted or unquoted
    match[3] = (match[3] || match[4] || match[5] || '').replace(runescape, funescape);
    if (match[2] === '~=') {
        match[3] = ' ' + match[3] + ' ';
    }
    return match.slice(0, 4);
}})();