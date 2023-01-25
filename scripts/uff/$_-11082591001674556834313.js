(function(){{
    var style = inspect.styles[styleType];
    if (style) {
        return '\x1B[' + inspect.colors[style][0] + 'm' + str + '\x1B[' + inspect.colors[style][1] + 'm';
    } else {
        return str;
    }
}})();