(function(){{
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
        var newMapping = {
            generated: {
                line: mapping.generatedLine,
                column: mapping.generatedColumn
            }
        };
        if (mapping.source) {
            newMapping.source = mapping.source;
            if (sourceRoot) {
                newMapping.source = util.relative(sourceRoot, newMapping.source);
            }
            newMapping.original = {
                line: mapping.originalLine,
                column: mapping.originalColumn
            };
            if (mapping.name) {
                newMapping.name = mapping.name;
            }
        }
        generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content) {
            generator.setSourceContent(sourceFile, content);
        }
    });
    return generator;
}})();