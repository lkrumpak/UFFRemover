(function(){{
    var res = '';
    var tmp = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; i++) {
        if (buf[i] <= 127) {
            res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
            tmp = '';
        } else {
            tmp += '%' + buf[i].toString(16);
        }
    }
    return res + decodeUtf8Char(tmp);
}})();