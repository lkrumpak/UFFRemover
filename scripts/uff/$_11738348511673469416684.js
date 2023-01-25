(function(){{
    var tokens, token;
    tokens = [];
    token = tokenizer.getMustache() || getUnquotedAttributeValueToken(tokenizer);
    while (token !== null) {
        tokens[tokens.length] = token;
        token = tokenizer.getMustache() || getUnquotedAttributeValueToken(tokenizer);
    }
    if (!tokens.length) {
        return null;
    }
    return tokens;
}})();