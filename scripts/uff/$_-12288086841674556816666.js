(function(){{
    var value;
    if (        $that.items.length === 1 &&        $that.items[0].type === types.INTERPOLATOR) {
        value =         $that.items[0].value;
        if (value !== undefined) {
            return value;
        }
    }
    return    $that.toString();
}})();