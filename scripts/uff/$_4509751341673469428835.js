(function(){{
    if (token[0] !== ':') {
        token = ':' + token;
    }
    var compiled = new RegExp(token, 'g');
        $that.params[token] = function (str) {
        return str.replace(compiled, matcher.source || matcher);
    };
    return    $that;
}})();