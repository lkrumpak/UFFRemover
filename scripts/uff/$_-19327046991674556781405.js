(function(){{
    var matches, last = 0, out = '';
    while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
        last = matches.index + matches[0].length;
        matches[0] = matches[0].replace(/^\*/, '([_.()!\\ %@&a-zA-Z0-9-]+)');
        out += str.substr(0, matches.index) + matches[0];
    }
    str = out += str.substr(last);
    var captures = str.match(/:([^\/]+)/ig), capture, length;
    if (captures) {
        length = captures.length;
        for (var i = 0; i < length; i++) {
            capture = captures[i];
            if (capture.slice(0, 2) === '::') {
                str = capture.slice(1);
            } else {
                str = str.replace(capture, paramifyString(capture, params));
            }
        }
    }
    return str;
}})();