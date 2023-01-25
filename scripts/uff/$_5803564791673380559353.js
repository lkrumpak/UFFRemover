(function(){{
    var toString = String;
    if (key.type === Syntax.Identifier) {
        return key.name;
    }
    return toString(key.value);
}})();