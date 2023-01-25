(function(){{
    var needle = {
        source: util.getArg(aArgs, 'source'),
        originalLine: util.getArg(aArgs, 'line'),
        originalColumn: util.getArg(aArgs, 'column')
    };
    if (        $that.sourceRoot) {
        needle.source = util.relative(        $that.sourceRoot, needle.source);
    }
    var mapping =     $that._findMapping(needle,     $that._originalMappings, 'originalLine', 'originalColumn', util.compareByOriginalPositions);
    if (mapping) {
        return {
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null)
        };
    }
    return {
        line: null,
        column: null
    };
}})();