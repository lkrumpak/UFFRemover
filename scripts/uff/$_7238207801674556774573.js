(function(){{
    var c = b.charAt(0);
    if ('"' == c || '\'' == c)
        b = b.slice(1, -1);
    return function (a) {
        return 0 <= a.innerHTML.indexOf(b);
    };
}})();