(function(){{
    var result, parent =         $that;
    while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        if (result) {
            previous.__wrapped__ = clone;
        } else {
            result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
    }
    previous.__wrapped__ = value;
    return result;
}})();