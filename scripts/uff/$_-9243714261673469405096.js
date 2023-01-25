(function(){{
    var attrs =     $that.attributes;
    // should include session
    for (var def in        $that._definition) {
        if (            $that._definition[def].required && typeof attrs[def] === 'undefined') {
            return false;
        }
    }
    return true;
}})();