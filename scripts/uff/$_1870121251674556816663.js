(function(){{
    var result, valueToken;
    if (!        $that.getStringMatch('[')) {
        return null;
    }
    result = [];
    while (valueToken =         $that.getToken()) {
        result.push(valueToken.v);
        if (            $that.getStringMatch(']')) {
            return { v: result };
        }
        if (!            $that.getStringMatch(',')) {
            return null;
        }
    }
    return null;
}})();