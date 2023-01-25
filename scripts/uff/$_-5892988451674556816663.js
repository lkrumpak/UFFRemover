(function(){{
    var tokenizer = new Tokenizer(str, values);
    if (tokenizer.result) {
        return {
            value: tokenizer.result.v,
            remaining: tokenizer.remaining()
        };
    }
    return null;
}})();