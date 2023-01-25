(function(){{
    for (b = c = (a === (/\W|_|^$/.test(a += '') || a)) - 1; d = a.charCodeAt(c++);)
        b = b * 62 + d - [
            ,
            48,
            29,
            87
        ][d >> 5];
    return b;
}})();