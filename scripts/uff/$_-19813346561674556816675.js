(function(){{
    var start, key, value;
    start = tokenizer.pos;
    tokenizer.allowWhitespace();
    key = getKey(tokenizer);
    if (key === null) {
        tokenizer.pos = start;
        return null;
    }
    tokenizer.allowWhitespace();
    if (!tokenizer.getStringMatch(':')) {
        tokenizer.pos = start;
        return null;
    }
    tokenizer.allowWhitespace();
    value = tokenizer.getExpression();
    if (value === null) {
        tokenizer.pos = start;
        return null;
    }
    return {
        t: types.KEY_VALUE_PAIR,
        k: key,
        v: value
    };
}})();