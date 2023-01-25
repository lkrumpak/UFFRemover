(function(){{
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (!aSourceFile) {
        aSourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot =     $that._sourceRoot;
    // Make "aSourceFile" relative if an absolute Url is passed.
    if (sourceRoot) {
        aSourceFile = util.relative(sourceRoot, aSourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();
    // Find mappings for the "aSourceFile"
        $that._mappings.forEach(function (mapping) {
        if (mapping.source === aSourceFile && mapping.originalLine) {
            // Check if it can be mapped by the source map, then update the mapping.
            var original = aSourceMapConsumer.originalPositionFor({
                line: mapping.originalLine,
                column: mapping.originalColumn
            });
            if (original.source !== null) {
                // Copy mapping
                if (sourceRoot) {
                    mapping.source = util.relative(sourceRoot, original.source);
                } else {
                    mapping.source = original.source;
                }
                mapping.originalLine = original.line;
                mapping.originalColumn = original.column;
                if (original.name !== null && mapping.name !== null) {
                    // Only use the identifier name if it's an identifier
                    // in both SourceMaps
                    mapping.name = original.name;
                }
            }
        }
        var source = mapping.source;
        if (source && !newSources.has(source)) {
            newSources.add(source);
        }
        var name = mapping.name;
        if (name && !newNames.has(name)) {
            newNames.add(name);
        }
    },     $that);
        $that._sources = newSources;
        $that._names = newNames;
    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content) {
            if (sourceRoot) {
                sourceFile = util.relative(sourceRoot, sourceFile);
            }
            this.setSourceContent(sourceFile, content);
        }
    },     $that);
}})();