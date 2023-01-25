(function(){{
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var mappingSeparator = /^[,;]/;
    var str = aStr;
    var mapping;
    var temp;
    while (str.length > 0) {
        if (str.charAt(0) === ';') {
            generatedLine++;
            str = str.slice(1);
            previousGeneratedColumn = 0;
        } else if (str.charAt(0) === ',') {
            str = str.slice(1);
        } else {
            mapping = {};
            mapping.generatedLine = generatedLine;
            // Generated column.
            temp = base64VLQ.decode(str);
            mapping.generatedColumn = previousGeneratedColumn + temp.value;
            previousGeneratedColumn = mapping.generatedColumn;
            str = temp.rest;
            if (str.length > 0 && !mappingSeparator.test(str.charAt(0))) {
                // Original source.
                temp = base64VLQ.decode(str);
                mapping.source =                 $that._sources.at(previousSource + temp.value);
                previousSource += temp.value;
                str = temp.rest;
                if (str.length === 0 || mappingSeparator.test(str.charAt(0))) {
                    throw new Error('Found a source, but no line and column');
                }
                // Original line.
                temp = base64VLQ.decode(str);
                mapping.originalLine = previousOriginalLine + temp.value;
                previousOriginalLine = mapping.originalLine;
                // Lines are stored 0-based
                mapping.originalLine += 1;
                str = temp.rest;
                if (str.length === 0 || mappingSeparator.test(str.charAt(0))) {
                    throw new Error('Found a source and line, but no column');
                }
                // Original column.
                temp = base64VLQ.decode(str);
                mapping.originalColumn = previousOriginalColumn + temp.value;
                previousOriginalColumn = mapping.originalColumn;
                str = temp.rest;
                if (str.length > 0 && !mappingSeparator.test(str.charAt(0))) {
                    // Original name.
                    temp = base64VLQ.decode(str);
                    mapping.name =                     $that._names.at(previousName + temp.value);
                    previousName += temp.value;
                    str = temp.rest;
                }
            }
                        $that.__generatedMappings.push(mapping);
            if (typeof mapping.originalLine === 'number') {
                                $that.__originalMappings.push(mapping);
            }
        }
    }
        $that.__originalMappings.sort(util.compareByOriginalPositions);
}})();