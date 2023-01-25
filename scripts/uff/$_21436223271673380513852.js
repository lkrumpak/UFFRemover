(function(){{
    return string.replace(_hyphenPattern, function (_, character) {
        return character.toUpperCase();
    });
}})();