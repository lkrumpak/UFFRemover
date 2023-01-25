(function(){{
    var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
    };
    var mapping =     $that._findMapping(needle,     $that._generatedMappings, 'generatedLine', 'generatedColumn', util.compareByGeneratedPositions);
    if (mapping) {
        var source = util.getArg(mapping, 'source', null);
        if (source &&            $that.sourceRoot) {
            source = util.join(            $that.sourceRoot, source);
        }
        return {
            source: source,
            line: util.getArg(mapping, 'originalLine', null),
            column: util.getArg(mapping, 'originalColumn', null),
            name: util.getArg(mapping, 'name', null)
        };
    }
    return {
        source: null,
        line: null,
        column: null,
        name: null
    };
}})();