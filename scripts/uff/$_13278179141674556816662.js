(function(){{
    var match;
    if (match = specialsPattern.exec(        $that.remaining())) {
                $that.pos += match[0].length;
        return { v: specials[match[0]] };
    }
}})();