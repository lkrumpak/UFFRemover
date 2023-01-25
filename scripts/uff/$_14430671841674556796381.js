(function(){{
    // WARN: We are not handling the case where buffer is still populated as the source should
    // not have buffer append operations as their final action.
    var source = '', buffer;
    for (var i = 0, len =             $that.source.length; i < len; i++) {
        var line =         $that.source[i];
        if (line.appendToBuffer) {
            if (buffer) {
                buffer = buffer + '\n    + ' + line.content;
            } else {
                buffer = line.content;
            }
        } else {
            if (buffer) {
                source += 'buffer += ' + buffer + ';\n  ';
                buffer = undefined;
            }
            source += line + '\n  ';
        }
    }
    return source;
}})();