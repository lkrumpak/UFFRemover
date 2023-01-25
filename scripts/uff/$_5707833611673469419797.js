(function(){{
    var flags = '';
    flags += r.multiline ? 'm' : '';
    flags += r.global ? 'g' : '';
    flags += r.ignorecase ? 'i' : '';
    return new RegExp(r.source, flags);
}})();