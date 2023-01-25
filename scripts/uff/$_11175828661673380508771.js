(function(){{
    var b = 0, c =         $that.A, d = new vd();
    d.next = function () {
        if (b >= c.length)
            throw ud;
        var d = c.key(b++);
        if (a)
            return d;
        d = c.getItem(d);
        if (!u(d))
            throw 'Storage mechanism: Invalid value was encountered';
        return d;
    };
    return d;
}})();