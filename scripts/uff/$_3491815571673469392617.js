(function(){{
    var index = -1, length = string.length;
    while (++index < length && isSpace(string.charCodeAt(index))) {
    }
    return index;
}})();