(function(){{
    var line;
    if (node && node.firstLine) {
        line = node.firstLine;
        message += ' - ' + line + ':' + node.firstColumn;
    }
    var tmp = Error.prototype.constructor.call(    $that, message);
    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
                $that[errorProps[idx]] = tmp[errorProps[idx]];
    }
    if (line) {
                $that.lineNumber = line;
                $that.column = node.firstColumn;
    }
}})();