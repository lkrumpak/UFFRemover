(function(){{
    var r = n.parsers.html[e];
    if (!r)
        throw new Error('Template parser not found "' + e + '"');
    return r(t.replace(/\r\n?/g, '\n'));
}})();