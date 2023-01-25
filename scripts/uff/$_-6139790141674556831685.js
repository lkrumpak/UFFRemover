(function(){{
    options = processOptions(options);
    var output = innerTransform(input, options);
    var result = output.code;
    if (options.sourceMap) {
        var map = inlineSourceMap(output.sourceMap, input, options.filename);
        result += '\n' + map;
    }
    return result;
}})();