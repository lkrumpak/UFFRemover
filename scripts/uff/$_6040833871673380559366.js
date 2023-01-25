(function(){{
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();
    // The generated code
    // Processed fragments are removed from this array.
    var remainingLines = aGeneratedCode.split('\n');
    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function (mapping) {
        if (lastMapping === null) {
            // We add the generated code until the first mapping
            // to the SourceNode without any mapping.
            // Each line is added as separate string.
            while (lastGeneratedLine < mapping.generatedLine) {
                node.add(remainingLines.shift() + '\n');
                lastGeneratedLine++;
            }
            if (lastGeneratedColumn < mapping.generatedColumn) {
                var nextLine = remainingLines[0];
                node.add(nextLine.substr(0, mapping.generatedColumn));
                remainingLines[0] = nextLine.substr(mapping.generatedColumn);
                lastGeneratedColumn = mapping.generatedColumn;
            }
        } else {
            // We add the code from "lastMapping" to "mapping":
            // First check if there is a new line in between.
            if (lastGeneratedLine < mapping.generatedLine) {
                var code = '';
                // Associate full lines with "lastMapping"
                do {
                    code += remainingLines.shift() + '\n';
                    lastGeneratedLine++;
                    lastGeneratedColumn = 0;
                } while (lastGeneratedLine < mapping.generatedLine);
                // When we reached the correct line, we add code until we
                // reach the correct column too.
                if (lastGeneratedColumn < mapping.generatedColumn) {
                    var nextLine = remainingLines[0];
                    code += nextLine.substr(0, mapping.generatedColumn);
                    remainingLines[0] = nextLine.substr(mapping.generatedColumn);
                    lastGeneratedColumn = mapping.generatedColumn;
                }
                // Create the SourceNode.
                addMappingWithCode(lastMapping, code);
            } else {
                // There is no new line in between.
                // Associate the code between "lastGeneratedColumn" and
                // "mapping.generatedColumn" with "lastMapping"
                var nextLine = remainingLines[0];
                var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
                remainingLines[0] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
                lastGeneratedColumn = mapping.generatedColumn;
                addMappingWithCode(lastMapping, code);
            }
        }
        lastMapping = mapping;
    },     $that);
    // We have processed all mappings.
    // Associate the remaining code in the current line with "lastMapping"
    // and add the remaining lines without any mapping
    addMappingWithCode(lastMapping, remainingLines.join('\n'));
    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content) {
            node.setSourceContent(sourceFile, content);
        }
    });
    return node;
    function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) {
            node.add(code);
        } else {
            node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, mapping.source, code, mapping.name));
        }
    }
}})();