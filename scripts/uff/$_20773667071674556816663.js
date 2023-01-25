(function(){{
    var key, valueToken, pair;
    tokenizer.allowWhitespace();
    key = getKey(tokenizer);
    if (!key) {
        return null;
    }
    pair = { key: key };
    tokenizer.allowWhitespace();
    if (!tokenizer.getStringMatch(':')) {
        return null;
    }
    tokenizer.allowWhitespace();
    valueToken = tokenizer.getToken();
    if (!valueToken) {
        return null;
    }
    pair.value = valueToken.v;
    return pair;
}})();