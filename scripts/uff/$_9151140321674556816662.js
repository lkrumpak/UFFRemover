(function(){{
    var match;
    if (match = numberPattern.exec(        $that.remaining())) {
                $that.pos += match[0].length;
        return { v: +match[0] };
    }
}})();