(function(){{
    var smc = Object.create(SourceMapConsumer.prototype);
    smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc.__generatedMappings = aSourceMap._mappings.slice().sort(util.compareByGeneratedPositions);
    smc.__originalMappings = aSourceMap._mappings.slice().sort(util.compareByOriginalPositions);
    return smc;
}})();