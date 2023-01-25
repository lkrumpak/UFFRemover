(function(){{
    var a = 1;
    var b = 0;
    for (var i = 0; i < data.length; i++) {
        a = (a + data.charCodeAt(i)) % MOD;
        b = (b + a) % MOD;
    }
    return a | b << 16;
}})();