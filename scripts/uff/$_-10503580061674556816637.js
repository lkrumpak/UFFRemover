(function(){{
    var unique, normalised;
    unique = str.replace(/\$\{([0-9]+)\}/g, function (match, $1) {
        return args[$1] ? args[$1][1] : 'undefined';
    });
    normalised = normaliseKeypath(unique);
    if (isRegularKeypath(normalised)) {
        return normalised;
    }
    return '${' + unique.replace(/[\.\[\]]/g, '-') + '}';
}})();