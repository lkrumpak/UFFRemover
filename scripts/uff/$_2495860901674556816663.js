(function(){{
    var result, pair;
    if (!        $that.getStringMatch('{')) {
        return null;
    }
    result = {};
    while (pair = getKeyValuePair(        $that)) {
        result[pair.key] = pair.value;
                $that.allowWhitespace();
        if (            $that.getStringMatch('}')) {
            return { v: result };
        }
        if (!            $that.getStringMatch(',')) {
            return null;
        }
    }
    return null;
}})();