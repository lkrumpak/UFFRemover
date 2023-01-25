(function(){{
    var i, j, l, tmp, placeHolders, arr;
    if (b64.length % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
    }
    // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice
    var len = b64.length;
    placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;
    // base64 is 4/3 + up to two characters of the original data
    arr = new Arr(b64.length * 3 / 4 - placeHolders);
    // if there are placeholders, only get up to the last complete 4 chars
    l = placeHolders > 0 ? b64.length - 4 : b64.length;
    var L = 0;
    function push(v) {
        arr[L++] = v;
    }
    for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = decode(b64.charAt(i)) << 18 | decode(b64.charAt(i + 1)) << 12 | decode(b64.charAt(i + 2)) << 6 | decode(b64.charAt(i + 3));
        push((tmp & 16711680) >> 16);
        push((tmp & 65280) >> 8);
        push(tmp & 255);
    }
    if (placeHolders === 2) {
        tmp = decode(b64.charAt(i)) << 2 | decode(b64.charAt(i + 1)) >> 4;
        push(tmp & 255);
    } else if (placeHolders === 1) {
        tmp = decode(b64.charAt(i)) << 10 | decode(b64.charAt(i + 1)) << 4 | decode(b64.charAt(i + 2)) >> 2;
        push(tmp >> 8 & 255);
        push(tmp & 255);
    }
    return arr;
}})();