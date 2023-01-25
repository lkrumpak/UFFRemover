(function(){{
    if (typeof text === 'string') {
        return text;
    }
    // If has no value, return an empty string.
    if (!text && text !== 0) {
        return '';
    }
    return '' + text;
}})();