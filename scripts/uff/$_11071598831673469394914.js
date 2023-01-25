(function(){{
    var i = 0, expanded = {},
        // assumes a single number if not a string
        parts = typeof value === 'string' ? value.split(' ') : [value];
    for (; i < 4; i++) {
        expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
    }
    return expanded;
}})();