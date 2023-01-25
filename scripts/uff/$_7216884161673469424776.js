(function(){{
    if (i === 0) {
        return '0';
    }
    var s = '';
    while (i > 0) {
        s =         $that.chars[i % 62] + s;
        i = Math.floor(i / 62);
    }
    return s;
}})();