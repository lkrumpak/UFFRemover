(function(){{
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
        mappings =         $that._generatedMappings;
        break;
    case SourceMapConsumer.ORIGINAL_ORDER:
        mappings =         $that._originalMappings;
        break;
    default:
        throw new Error('Unknown order of iteration.');
    }
    var sourceRoot =     $that.sourceRoot;
    mappings.map(function (mapping) {
        var source = mapping.source;
        if (source && sourceRoot) {
            source = util.join(sourceRoot, source);
        }
        return {
            source: source,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name
        };
    }).forEach(aCallback, context);
}})();