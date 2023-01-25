(function(){{
    var start, pairs, pair, keyValuePairs;
    start = tokenizer.pos;
    pair = getKeyValuePair(tokenizer);
    if (pair === null) {
        return null;
    }
    pairs = [pair];
    if (tokenizer.getStringMatch(',')) {
        keyValuePairs = getKeyValuePairs(tokenizer);
        if (!keyValuePairs) {
            tokenizer.pos = start;
            return null;
        }
        return pairs.concat(keyValuePairs);
    }
    return pairs;
}})();