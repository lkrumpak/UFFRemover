(function(){{
    var b = a.charCodeAt(0);
    if (b <= 255)
        var c = 'x', d = 2;
    else
        var c = 'u', d = 4;
    return '\\' + c + i(b.toString(16).toUpperCase(), '0', d);
}})();