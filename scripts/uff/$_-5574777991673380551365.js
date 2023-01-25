(function(){{
    var token;
    if (token = getStringLiteral(tokenizer)) {
        return identifier.test(token.v) ? token.v : '"' + token.v.replace(/"/g, '\\"') + '"';
    }
    if (token = getNumberLiteral(tokenizer)) {
        return token.v;
    }
    if (token = getName(tokenizer)) {
        return token;
    }
}})();