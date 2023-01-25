(function(){{
    var match;
    if (!        $that.values) {
        return null;
    }
    if ((match = placeholderAtStartPattern.exec(        $that.remaining())) &&        $that.values.hasOwnProperty(match[1])) {
                $that.pos += match[0].length;
        return { v:             $that.values[match[1]] };
    }
}})();