(function(){{
    var i = 0, len = tokens.length, selector = '';
    for (; i < len; i++) {
        selector += tokens[i].value;
    }
    return selector;
}})();