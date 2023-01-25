(function(){{
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; i++) {
        ret += String.fromCharCode(buf[i] & 127);
    }
    return ret;
}})();