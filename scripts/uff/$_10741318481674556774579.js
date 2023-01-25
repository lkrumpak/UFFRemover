(function(){{
    var b = a.O, c, d, e = b.altKey;
    G && 'keypress' == a.type ? (c =     $that.ea, d = 13 != c && 27 != c ? b.keyCode : 0) : I && 'keypress' == a.type ? (c =     $that.ea, d = 0 <= b.charCode && 63232 > b.charCode && jd(c) ? b.charCode : 0) : nb && !I ? (c =     $that.ea, d = jd(c) ? b.keyCode : 0) : (c = b.keyCode ||    $that.ea, d = b.charCode || 0, de && (e =     $that.Ib), J && 63 == d && 224 == c && (c = 191));
    var g = c = kd(c), h = b.keyIdentifier;
    c ? 63232 <= c && c in ae ? g = ae[c] : 25 == c && a.shiftKey && (g = 9) : h && h in be && (g = be[h]);
    a = g ==    $that.I;
        $that.I = g;
    b = new ee(g, d, a, b);
    b.altKey = e;
        $that.dispatchEvent(b);
}})();